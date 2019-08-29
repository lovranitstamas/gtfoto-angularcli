import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PortfolioPictureModel} from '../../../shared/portfolio-picture-model';
import {PortfolioService} from '../../../shared/portfolio.service';
import {UserService} from '../../../shared/user.service';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})

export class TestListComponent implements OnInit, AfterViewInit, OnDestroy {
  pictures: PortfolioPictureModel[];
  isLoggedIn: boolean;

  @ViewChild('searchInput') searchInput: ElementRef;
  private filteredText$ = new BehaviorSubject<string>(null);
  private _picturesSubscription: Subscription;
  private isLoggedInSubscription: Subscription;

  constructor(private _portfolioService: PortfolioService,
              userService: UserService) {
    this.isLoggedInSubscription = userService.isLoggedIn$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
  }

  ngOnInit() {

    this._picturesSubscription = this._portfolioService.getAllPortfolios().pipe(
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

  ngAfterViewInit(): void {
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
    this.isLoggedInSubscription.unsubscribe();
  }

}
