import {Component, OnDestroy, OnInit} from '@angular/core';
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
  setNode = false;
  selectedFiles: FileList;
  currentFileUpload: PortfolioPictureModel;
  file: boolean | File;

  // close all subscription
  private _destroy$ = new Subject<void>();

  // private _destroy$: Subject<void> = new Subject();

  constructor(private _route: ActivatedRoute,
              private _portfolioService: PortfolioService,
              private _location: Location,
              public userService: UserService) {
  }

  ngOnInit() {
    const portfolioPictureId = this._route.snapshot.params['id'];
    const node = this._route.snapshot.params['node'];

    // create an empty model while we wait for data
    this.portfolioPicture = new PortfolioPictureModel();
    this.portfolioPicture.idF = '';
    this.portfolioPicture.titleF = '';
    this.portfolioPicture.nodeF = '';
    this.portfolioPicture.filenameF = '';
    this.portfolioPicture.dateOfEventF = '';

    // a method get true/false value in all case
    // from false to true oninit and set false from click
    // the other option is set true the default value
    this.viewForm = !!portfolioPictureId;

    if (portfolioPictureId) {
      this._portfolioService.getPortfolioById(portfolioPictureId).pipe(
        takeUntil(this._destroy$))
        .subscribe(evm => {
          this.portfolioPicture.idF = evm.id;
          this.portfolioPicture.titleF = evm.title;
          this.portfolioPicture.nodeF = evm.node;
          this.portfolioPicture.filenameF = './uploads/gallery/' + node + '/' + evm.filename;
          this.portfolioPicture.dateOfEventF = evm.createDate;
          this.setNode = true;
        });
    }
  }

  ngOnDestroy() {
    // through the takeUntil function will be closed all stream
    // in this case it is not absolutely necessary because all http stream close itself
    // http://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    this._destroy$.next();
    this._destroy$.complete();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {

    !this.selectedFiles ? this.file = false : this.file = this.selectedFiles.item(0);
    if (this.selectedFiles) {
      this.currentFileUpload = this.portfolioPicture;
    }

    if (this.file === false) {
      this._portfolioService.update(this.portfolioPicture).pipe(
        takeUntil(this._destroy$))
        .subscribe(
          () => this.navigateBack(),
          (err) => {
            console.warn(`Problémánk van a form módosításban: ${err}`);
          }
        );
    } else {
      this.selectedFiles = undefined;
      this._portfolioService.create(this.portfolioPicture, this.file).pipe(
        takeUntil(this._destroy$))
        .subscribe(
          () => this.navigateBack(),
          (err) => {
            console.warn(`Problémánk van a form feltöltésénél: ${err}`);
          }
        );
    }
  }

  delete() {
    this._portfolioService.delete(this.portfolioPicture).pipe(
      takeUntil(this._destroy$))
      .subscribe(
        () => this.navigateBack(),
        (err) => {
          console.warn(`Problémánk van a törlésnél: ${err}`);
        }
      );
  }

  navigateBack() {
    this._location.back();
  }
}
