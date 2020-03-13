import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {PortfolioService} from '../../../shared/portfolio.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-photogallery-pictures',
  templateUrl: './photogallery-pictures.component.html',
  styleUrls: ['./photogallery-pictures.component.scss']
})
export class PhotogalleryPicturesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImagesPortrait: NgxGalleryImage[];
  galleryImagesChildAndFamily: NgxGalleryImage[];
  galleryImagesPregnant: NgxGalleryImage[];
  galleryImagesChristening: NgxGalleryImage[];
  galleryImagesKindergarten: NgxGalleryImage[];
  galleryImagesCreative: NgxGalleryImage[];
  galleryImagesEngaged: NgxGalleryImage[];
  galleryImagesPreparation: NgxGalleryImage[];
  galleryImagesPermission: NgxGalleryImage[];
  galleryImagesCivilCerenomy: NgxGalleryImage[];
  galleryImagesLiturgy: NgxGalleryImage[];
  galleryImagesDinnerParty: NgxGalleryImage[];
  private _portraitListArray = [];
  private _childandfamilyListArray = [];
  private _pregnantListArray = [];
  private _christeningListArray = [];
  private _kindergartenListArray = [];
  private _creativeListArray = [];
  private _engagedListArray = [];
  private _preparationListArray = [];
  private _permissionListArray = [];
  private _civilCerenomyListArray = [];
  private _liturgyListArray = [];
  private _dinnerPartyListArray = [];
  private _picturesSubscriptionPortrait: Subscription;
  private _picturesSubscriptionChildAndFamily: Subscription;
  private _picturesSubscriptionPregnant: Subscription;
  private _picturesSubscriptionChristening: Subscription;
  private _picturesSubscriptionKindergarten: Subscription;
  private _picturesSubscriptionCreative: Subscription;
  private _picturesSubscriptionEngaged: Subscription;
  private _picturesSubscriptionPreparation: Subscription;
  private _picturesSubscriptionPermission: Subscription;
  private _picturesSubscriptionCivilCerenomy: Subscription;
  private _picturesSubscriptionLiturgy: Subscription;
  private _picturesSubscriptionDinnerParty: Subscription;
  showCreativePhotos: boolean;
  showEngagedPhotos: boolean;
  showPreparationPhotos: boolean;
  showPermissionPhotos: boolean;
  showCivilCerenomyPhotos: boolean;
  showLiturgyPhotos: boolean;
  showDinnerPartyPhotos: boolean;

  constructor(
    private _portfolioService: PortfolioService
  ) {
    this.showCreativePhotos = false;
    this.showEngagedPhotos = false;
    this.showPreparationPhotos = false;
    this.showPermissionPhotos = false;
    this.showCivilCerenomyPhotos = false;
    this.showLiturgyPhotos = false;
    this.showDinnerPartyPhotos = false;
  }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '700px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this._picturesSubscriptionPortrait = this._portfolioService.getAllPortraitPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._portraitListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesPortrait = this._portraitListArray;

    this._picturesSubscriptionChildAndFamily = this._portfolioService.getAllChildAndFamilyPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._childandfamilyListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesChildAndFamily = this._childandfamilyListArray;

    this._picturesSubscriptionPregnant = this._portfolioService.getAllPregnantPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._pregnantListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesPregnant = this._pregnantListArray;

    this._picturesSubscriptionChristening = this._portfolioService.getAllChristeningPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._christeningListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesChristening = this._christeningListArray;

    this._picturesSubscriptionKindergarten = this._portfolioService.getAllKindergartenPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._kindergartenListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesKindergarten = this._kindergartenListArray;

    this._picturesSubscriptionCreative = this._portfolioService.getAllCreativePictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._creativeListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesCreative = this._creativeListArray;
    this.showCreativePhotos = true;

    this._picturesSubscriptionEngaged = this._portfolioService.getAllEngagedPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._engagedListArray.push(item);
            }
          );
        }
      );
    this.galleryImagesEngaged = this._engagedListArray;


    this._picturesSubscriptionPreparation = this._portfolioService.getAllPreparationPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._preparationListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesPreparation = this._preparationListArray;

    this._picturesSubscriptionPermission = this._portfolioService.getAllPermissionPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._permissionListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesPermission = this._permissionListArray;

    this._picturesSubscriptionCivilCerenomy = this._portfolioService.getAllCivilCerenomyPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._civilCerenomyListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesCivilCerenomy = this._civilCerenomyListArray;

    this._picturesSubscriptionLiturgy = this._portfolioService.getAllLiturgyPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._liturgyListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesLiturgy = this._liturgyListArray;

    this._picturesSubscriptionDinnerParty = this._portfolioService.getAllDinnerPartyPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._dinnerPartyListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesDinnerParty = this._dinnerPartyListArray;
  }

  setDefaultStateOfWeddingPhotos() {
    this.showCreativePhotos = false;
    this.showEngagedPhotos = false;
    this.showPreparationPhotos = false;
    this.showPermissionPhotos = false;
    this.showCivilCerenomyPhotos = false;
    this.showLiturgyPhotos = false;
    this.showDinnerPartyPhotos = false;
  }

  showCreativePhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showCreativePhotos = true;
  }

  showEngagedPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showEngagedPhotos = true;
  }

  showPreparationPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showPreparationPhotos = true;
  }

  showPermissionPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showPermissionPhotos = true;
  }

  showCivilCerenomyPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showCivilCerenomyPhotos = true;
  }

  showLiturgyPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showLiturgyPhotos = true;
  }

  showDinnerPartyPhotosFnc() {
    this.setDefaultStateOfWeddingPhotos();
    this.showDinnerPartyPhotos = true;
  }

}
