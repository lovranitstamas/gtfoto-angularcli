import {AfterViewInit, Component, ElementRef, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryOptions} from 'ngx-masonry';
import {PortfolioPictureModel} from '../../shared/portfolio-picture-model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {PortfolioService} from '../../shared/portfolio.service';
import {UserService} from '../../shared/user.service';
import {delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput') searchInput: ElementRef;
  @Input() node;

  masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  pictures: PortfolioPictureModel[];
  isLoggedIn: boolean;
  isAdmin: boolean;
  fullListLength: number;
  limit = 30;
  fullListView = false;
  emptyList = false;
  loading = true;

  masonryImages; // remove type
  resultObjects: { id: string; nodeId: string; subfolder: string; category: string; title: string; filename: string; createDate: string }[];
  private filteredText$ = new BehaviorSubject<string>(null);
  private _picturesSubscription: Subscription;
  private _isLoggedInSubscription: Subscription;
  private _adminStatusSubscription: Subscription;

  constructor(
    private _portfolioService: PortfolioService,
    userService: UserService,
    @Inject('API_URL') private apiUrl: string
  ) {
    this._isLoggedInSubscription = userService.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      }
    );
    this._adminStatusSubscription = userService.adminStatus$.subscribe(
      adminStatus => {
        this.isAdmin = adminStatus;
      }
    );
  }


  ngOnInit() {
    this._picturesSubscription = this._portfolioService.getPictureList(this.node).pipe(
      flatMap(
        pictures => {
          pictures.length === 0 ? this.emptyList = true : this.emptyList = false;
          this.fullListLength = pictures.length;

          return this.filteredText$.pipe(
            map(
              filterText => {
                if (filterText === null) {
                  return pictures;
                } else {
                  return pictures.filter(
                    picture => {
                      return picture.createDate.split('-', 3).indexOf(filterText.toLowerCase()) > -1;
                    }
                  );
                }
              }
            )
          );
        }
      )
    ).subscribe(
      pictures => {
        this.pictures = pictures;
        this.loading = false;

        this.resultObjects = this.pictures.map((ev) => {
          return {
            id: ev.id,
            nodeId: ev.nodeId,
            subfolder: ev.subfolder,
            category: ev.category,
            title: ev.title,
            filename: `${this.apiUrl}uploads/gallery/${ev.subfolder}/${ev.filename}`,
            // filename: ${this.apiUrl}'api./uploads/gallery/' + ev.subfolder + '/' + ev.filename,
            createDate: ev.createDate
          };
        });

        if (this.fullListView) {
          this.masonryImages = this.resultObjects.slice(0, this.pictures.length);
        } else {
          this.masonryImages = this.resultObjects.slice(0, this.limit);
        }

      }
    );
  }

  public ngAfterViewInit() {
    const input = document.querySelector('#search-input');
    // this.searchInput.nativeElement
    fromEvent(input, 'keyup').pipe(
      delay(300),
      map(
        (event: Event) => {
          return (event.srcElement as HTMLInputElement).value;
        }
      ),
      distinctUntilChanged())
      .subscribe(
        text => {
          if (text.length === 0) {
            text = null;
          }
          this.filteredText$.next(text);
        }
      );
  }

  ngOnDestroy(): void {
    this._picturesSubscription.unsubscribe();
    this._isLoggedInSubscription.unsubscribe();
  }

  showMoreImages() {
    this.masonryImages = this.pictures.slice(0, this.pictures.length);
    this.fullListView = true;
  }

}
