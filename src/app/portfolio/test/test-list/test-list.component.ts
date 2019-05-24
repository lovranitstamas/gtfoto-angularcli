import {Component,OnInit} from '@angular/core';
import {PortfolioPictureModel} from "../../../shared/portfolio-picture-model";
import {PortfolioService} from "../../../shared/portfolio.service";
import {UserService} from '../../../shared/user.service'; 
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit{

  public portfolioPicturesGrouppedBy3: PortfolioPictureModel[];
  public portfolioPictures$:Observable<PortfolioPictureModel[]>;
  public portfolioPicturesGrouppedBy3$:Observable<PortfolioPictureModel[][]>;

  constructor(private _portfolioService: PortfolioService,
              public userService: UserService) {
  }

  ngOnInit() {

    // [0,1,2],[3,4,5]
    /*this.portfolioPicturesGrouppedBy3 = this._portfolioService.getAllPortfolios()
    .reduce((acc, curr: PortfolioPictureModel, ind: number) => {
      if (ind % 3 === 0) {
        // []
        acc.push([]);
      }
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);*/
    
    //this.portfolioPictures$ = this._portfolioService.getAllPortfolios();
    
    /* this._portfolioService.getAllPortfolios().subscribe(data => {
      this.portfolioPicturesGrouppedBy3 = data.reduce((acc, curr: EventModel, ind: number) => {
        if (ind % 3 === 0) {
          // []
          acc.push([]);
        }
        acc[acc.length - 1].push(curr);
        return acc;
      }, [])
    });*/
    
    this.portfolioPicturesGrouppedBy3$ = this._portfolioService.getAllPortfolios().pipe(
      map(data => {
        return data.reduce((acc:Array<any>, curr: PortfolioPictureModel, ind: number) => {
          if (ind % 3 === 0) {
            // []
            acc.push([]);
          }
          acc[acc.length - 1].push(curr);
          return acc;
          }, []);
        }
      )
    );
  }

}
