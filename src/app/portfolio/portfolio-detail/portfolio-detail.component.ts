import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../shared/portfolio.service';
import {PortfolioPictureModel} from '../../shared/portfolio-picture-model';
import {ActivatedRoute, Router} from '@angular/router';
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
  messageToWebmaster: boolean;
  selectedFiles: FileList;
  file: boolean | File;
  nodes: Array<{ id: number, category: string }> = [];

  // close all subscription
  private _destroy$ = new Subject<void>();

  // private _destroy$: Subject<void> = new Subject();

  constructor(private _route: ActivatedRoute,
              private _portfolioService: PortfolioService,
              private _location: Location,
              public userService: UserService,
              private _router: Router,
              @Inject('API_URL') private apiUrl: string) {
  }

  ngOnInit() {
    const portfolioPictureId = this._route.snapshot.params['id'];
    const node = this._route.snapshot.params['node'];

    // create an empty model while we wait for data
    this.portfolioPicture = new PortfolioPictureModel();
    this.portfolioPicture.idFunction = '';
    this.portfolioPicture.nodeIdFunction = '';
    this.portfolioPicture.subfolderFunction = '';
    this.portfolioPicture.categoryFunction = '';
    this.portfolioPicture.titleFunction = '';
    this.portfolioPicture.fileURLFunction = '';
    this.portfolioPicture.dateOfEventFunction = '';

    // a method get true/false value in all case
    // from false to true oninit and set false from click
    // the other option is set true the default value
    this.viewForm = !!portfolioPictureId;

    if (portfolioPictureId) {
      this._portfolioService.getPortfolioById(portfolioPictureId).pipe(
        takeUntil(this._destroy$))
        .subscribe(evm => {
          if (evm.status_code_header === 200) {
            this.portfolioPicture.idFunction = evm.body['picture'].id;
            this.portfolioPicture.nodeIdFunction = evm.body['picture'].nodeId;
            this.portfolioPicture.subfolderFunction = evm.body['picture'].subfolder;
            this.portfolioPicture.categoryFunction = evm.body['picture'].category;
            this.portfolioPicture.titleFunction = evm.body['picture'].title;
            this.portfolioPicture.fileURLFunction = `${this.apiUrl}uploads/gallery/${node}/${evm.body['picture'].filename}`;
            this.portfolioPicture.dateOfEventFunction = evm.body['picture'].createDate;
            this.setNode = true;
          } else {
            console.log(evm.status_code_header);
            this._router.navigate(['/home']);
          }
        });
    }

    this.nodes = [
      {id: 1, category: 'Portré'},
      {id: 2, category: 'Gyerek-és családi fotók'},
      {id: 3, category: 'Kismama fotók'},
      {id: 4, category: 'Keresztelő fotók'},
      {id: 5, category: 'Óvodai fotók'},
      {id: 6, category: 'Kreatív fotók'},
      {id: 7, category: 'Jegyes fotók'},
      {id: 8, category: 'Készülődés'},
      {id: 9, category: 'Ki kérő'},
      {id: 10, category: 'Polgári szertartás'},
      {id: 11, category: 'Templomi szertartás'},
      {id: 12, category: 'Vacsora-buli'}
    ];
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

    if (this.file === false) {
      this._portfolioService.update(this.portfolioPicture).pipe(
        takeUntil(this._destroy$))
        .subscribe(
          () => {
            this.navigateBack();
          },
          (err) => {
            this.handleError(err);
          }
        );
    } else {
      this.selectedFiles = undefined;
      this._portfolioService.create(this.portfolioPicture, this.file).pipe(
        takeUntil(this._destroy$))
        .subscribe(
          () => this.navigateBack(),
          (err) => {
            this.handleError(err);
          }
        );
    }
  }

  delete() {
    this.messageToWebmaster = false;
    this._portfolioService.delete(this.portfolioPicture).pipe(
      takeUntil(this._destroy$))
      .subscribe(
        () => {
          this.navigateBack();
        },
        (err) => {
          this.handleError(err);
        }
      );
  }

  navigateBack() {
    this._location.back();
  }

  handleError(err) {
    switch (err.status) {
      case 422:
        console.log(err.status);
        this.messageToWebmaster = true;
        break;
      case 400:
        console.log(err.status);
        this.messageToWebmaster = true;
        break;
      default:
        this.messageToWebmaster = true;
        console.log(err);
    }
  }
}
