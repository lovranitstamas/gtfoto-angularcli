import {Component, OnInit, OnDestroy} from '@angular/core';
import {PortfolioService} from '../../shared/portfolio.service';
import {PortfolioPictureModel} from '../../shared/portfolio-picture-model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'; 
import {UserService} from '../../shared/user.service'; 
import {Subject} from 'rxjs'; 
import {takeUntil} from 'rxjs/operators'; 

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit, OnDestroy {
  portfolioPicture: PortfolioPictureModel;
  viewForm = false; 

  //close all subscription 
  private _destroy$ = new Subject<void>(); 
  //private _destroy$: Subject<void> = new Subject(); 

  constructor(private _route: ActivatedRoute, 
              private _portfolioService: PortfolioService,
              private _location: Location,
              public userService: UserService) {
  }

  ngOnInit() {
    const portfolioPictureId = this._route.snapshot.params['id'];

    //create an empty model while we wait for data
    this.portfolioPicture = new PortfolioPictureModel(PortfolioPictureModel.emptyPortfolio);
    
    //a method get true/false value in all case
    //from false to true oninit and set false from click
    //the other option is set true the default value
    this.viewForm = !!portfolioPictureId; 

    if (portfolioPictureId) {
      this._portfolioService.getPortfolioById(portfolioPictureId).pipe(
        takeUntil(this._destroy$))  
        .subscribe(evm => (this.portfolioPicture = evm));
    }
  }

  
  ngOnDestroy() {
    //through the takeUntil function will be closed all stream
    //in this case it is not absolutely necessary because all http stream close itself
    // http://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    this._destroy$.next();
    this._destroy$.complete();
  }

  onSubmit() {
    this._portfolioService.save(this.portfolioPicture).pipe(
      takeUntil(this._destroy$))
      .subscribe(
        () => this.navigateBack(),
        (err) => {
          console.warn(`Problémánk van a form mentésnél: ${err}`);
        }
      );
  };

  
  delete() {
    this._portfolioService.delete(this.portfolioPicture).pipe(
      takeUntil(this._destroy$))
      .subscribe(
        () => this.navigateBack(),
        (err) => {
          console.warn(`Problémánk van a form mentésnél: ${err}`);
        }
      );
  }

  navigateBack() { 
    this._location.back(); 
  } 

}
