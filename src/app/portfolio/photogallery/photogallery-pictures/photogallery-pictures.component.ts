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
  galleryImagesEngaged: NgxGalleryImage[];
  galleryImagesCreative: NgxGalleryImage[];
  galleryImagesPortrait: NgxGalleryImage[];
  galleryImagesChildAndFamily: NgxGalleryImage[];
  galleryImagesPregnant: NgxGalleryImage[];
  galleryImagesChristening: NgxGalleryImage[];
  galleryImagesKindergarten: NgxGalleryImage[];
  galleryImagesWedding: NgxGalleryImage[];
  private _engagedListArray = [];
  private _creativeListArray = [];
  private _portraitListArray = [];
  private _childandfamilyListArray = [];
  private _pregnantListArray = [];
  private _christeningListArray = [];
  private _kindergartenListArray = [];
  private _weddingListArray = [];
  private _picturesSubscriptionEngaged: Subscription;
  private _picturesSubscriptionCreative: Subscription;
  private _picturesSubscriptionPortrait: Subscription;
  private _picturesSubscriptionChildAndFamily: Subscription;
  private _picturesSubscriptionPregnant: Subscription;
  private _picturesSubscriptionChristening: Subscription;
  private _picturesSubscriptionKindergarten: Subscription;
  private _picturesSubscriptionWedding: Subscription;

  constructor(
    private _portfolioService: PortfolioService
  ) {
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

    this._picturesSubscriptionWedding = this._portfolioService.getAllWeddingPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: './uploads/gallery/' + picture.node + '/' + picture.filename,
                medium: './uploads/gallery/' + picture.node + '/' + picture.filename,
                big: './uploads/gallery/' + picture.node + '/' + picture.filename
              };
              this._weddingListArray.push(item);
            }
          );
        }
      );

    this.galleryImagesWedding = this._weddingListArray;
  }

}
