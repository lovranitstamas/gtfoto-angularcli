import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PortfolioPictureModel} from '../../../shared/portfolio-picture-model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {PortfolioService} from '../../../shared/portfolio.service';
import {delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';
import {NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'app-engaged-list',
  templateUrl: './engaged-list.component.html',
  styleUrls: ['./engaged-list.component.scss']
})
export class EngagedListComponent implements OnInit, AfterViewInit, OnDestroy {
  pictures: PortfolioPictureModel[];
  masonryImages: PortfolioPictureModel[];
  @ViewChild('searchInput') searchInput: ElementRef;
  private filteredText$ = new BehaviorSubject<string>(null);
  private _picturesSubscription: Subscription;

  masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  limit = 1;
  fullListView = false;

  constructor(private _portfolioService: PortfolioService) {
  }


  ngOnInit() {
    this._picturesSubscription = this._portfolioService.getAllPortfoliosTest('engaged').pipe(
      flatMap(
        pictures => {
          return this.filteredText$.pipe(
            map(
              filterText => {
                if (filterText === null) {
                  return pictures;
                } else {
                  return pictures.filter(
                    picture => {
                      return picture.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
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
  }

  showMoreImages() {
    this.masonryImages = this.pictures.slice(0, this.pictures.length);
    this.fullListView = true;
  }
}
