import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {PortfolioPictureModel} from '../../../shared/portfolio-picture-model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {PortfolioService} from '../../../shared/portfolio.service';
import {delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';

@Component({
  selector: 'app-engaged-list',
  templateUrl: './engaged-list.component.html',
  styleUrls: ['./engaged-list.component.scss']
})
export class EngagedListComponent implements OnInit, AfterViewInit, OnDestroy {
  pictures: PortfolioPictureModel[];
  @ViewChild('searchInput') searchInput: ElementRef;
  private filteredText$ = new BehaviorSubject<string>(null);
  private _picturesSubscription: Subscription;

  private _urls: string[] = [
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg'
  ];

  constructor(private _portfolioService: PortfolioService) {
  }

  public get images(): IMasonryGalleryImage[] {
    return this._urls.map(
      m =>
        <IMasonryGalleryImage> {
          imageUrl: m
        }
    );
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
      }
    );
  }

  public ngAfterViewInit() {
    $(document).ready(() => {
      setTimeout(() => {
        $('.masonry-extend div img').each(function() {
          $(this).wrap('<div class="hover-zoom-box"></div>');
        });
      }, 500);
    });

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
}
