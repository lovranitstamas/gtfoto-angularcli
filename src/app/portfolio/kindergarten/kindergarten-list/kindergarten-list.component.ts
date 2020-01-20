import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryOptions} from 'ngx-masonry';
import {PortfolioPictureModel} from '../../../shared/portfolio-picture-model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {PortfolioService} from '../../../shared/portfolio.service';
import {UserService} from '../../../shared/user.service';
import {delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-kindergarten-list',
  templateUrl: './kindergarten-list.component.html',
  styleUrls: ['./kindergarten-list.component.scss']
})
export class KindergartenListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput') searchInput: ElementRef;

  masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  pictures: PortfolioPictureModel[];
  masonryImages: PortfolioPictureModel[];
  isLoggedIn: boolean;
  isAdmin;
  fullListLength: number;
  limit = 5;
  fullListView = false;
  emptyKindergartenList = false;
  loading = true;

  private filteredText$ = new BehaviorSubject<string>(null);
  private _picturesSubscription: Subscription;
  private _isLoggedInSubscription: Subscription;
  private _adminStatusSubscription: Subscription;

  constructor(
    private _portfolioService: PortfolioService,
    userService: UserService) {
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
    this._picturesSubscription = this._portfolioService.getAllPortfolios('kindergarten').pipe(
      flatMap(
        pictures => {
          pictures.length === 0 ? this.emptyKindergartenList = true : this.emptyKindergartenList = false;
          this.fullListLength = pictures.length;

          return this.filteredText$.pipe(
            map(
              filterText => {
                if (filterText === null) {
                  return pictures;
                } else {
                  return pictures.filter(
                    picture => {
                      return picture.dateOfEvent.split('-', 3).indexOf(filterText.toLowerCase()) > -1;
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

        if (this.fullListView) {
          this.masonryImages = this.pictures.slice(0, this.pictures.length);
        } else {
          this.masonryImages = this.pictures.slice(0, this.limit);
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
