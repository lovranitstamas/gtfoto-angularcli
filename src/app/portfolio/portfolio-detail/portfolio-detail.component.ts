import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../shared/portfolio.service';
import {PortfolioPictureModel} from '../../shared/portfolio-picture-model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common'; 
import {UserService} from '../../shared/user.service'; 

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent  implements OnInit {
  portfolioPicture: PortfolioPictureModel;
  editForm = false; 

  constructor(private _route: ActivatedRoute, 
              //private _router: Router, 
              private _portfolioService: PortfolioService,
              private _location: Location,
              public userService: UserService) {
  }

  ngOnInit() {
    const portfolioPictureId = +this._route.snapshot.params['id'];
    if (portfolioPictureId) {
      this.portfolioPicture = this._portfolioService.getPortfolioById(portfolioPictureId);
    } else {
      this.editForm = true; 
      this.portfolioPicture = new PortfolioPictureModel(PortfolioPictureModel.emptyPortfolio);
    }
  }

  onSubmit(form) {
    // console.log('formValue', form);
    // console.log('event', this.event);
    if (this.portfolioPicture.id) {
      this._portfolioService.update(this.portfolioPicture);
    } else {
      this._portfolioService.create(this.portfolioPicture);
    }

    //this._router.navigate(['/portfolio/test/list']);
    this._location.back(); 
  };

  
  navigateBack() { 
    this._location.back(); 
  } 

}
