import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../shared/portfolio.service';
import {PortfolioPictureModel} from '../../shared/portfolio-picture-model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent  implements OnInit {
  portfolioPicture: PortfolioPictureModel;

  constructor(private _route: ActivatedRoute, 
              private _router: Router, 
              private _portfolioService: PortfolioService,
              private _location: Location) {
  }

  ngOnInit() {
    const portfolioPictureId = +this._route.snapshot.params['id'];
    if (portfolioPictureId) {
      this.portfolioPicture = this._portfolioService.getPortfolioById(portfolioPictureId);
    } else {
      this.portfolioPicture = new PortfolioPictureModel(PortfolioPictureModel.emptyPortfolio);
    }
  }

  onSubmit(form) {
    // console.log('formValue', form);
    // console.log('event', this.event);
    if (this.portfolioPicture.id) {
      console.log('update');
      this._portfolioService.update(this.portfolioPicture);
    } else {
      console.log('insert');
      this._portfolioService.create(this.portfolioPicture);
    }

    //this._router.navigate(['/portfolio/test/list']);
    this._location.back(); 
  };

}
