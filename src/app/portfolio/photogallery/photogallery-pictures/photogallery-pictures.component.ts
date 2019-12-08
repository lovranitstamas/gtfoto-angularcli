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
  galleryImages: NgxGalleryImage[];
  private _engagedListArray = [];
  private _picturesSubscription: Subscription;

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

    this._picturesSubscription = this._portfolioService.getAllEngagedPictures()
      .subscribe(
        pictures => {
          pictures.map(
            picture => {
              const item = {
                small: picture.pictureURL,
                medium: picture.pictureURL,
                big: picture.pictureURL
              };
              this._engagedListArray.push(item);
            }
          );
        }
      );
    this.galleryImages = this._engagedListArray;
  }
}
