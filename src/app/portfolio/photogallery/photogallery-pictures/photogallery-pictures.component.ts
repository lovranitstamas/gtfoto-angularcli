import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-photogallery-pictures',
  templateUrl: './photogallery-pictures.component.html',
  styleUrls: ['./photogallery-pictures.component.scss']
})
export class PhotogalleryPicturesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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

    this.galleryImages = [
      {
        small: 'https://firebasestorage.googleapis.com/v0/b/gt-foto-angular-89a91.appspot.com/o/uploads%2FPNG_transparency_demonstration_1.png?alt=media&token=c9d06107-f025-4cf9-bc07-27d4ec2db2b7',
        medium: 'https://firebasestorage.googleapis.com/v0/b/gt-foto-angular-89a91.appspot.com/o/uploads%2FPNG_transparency_demonstration_1.png?alt=media&token=c9d06107-f025-4cf9-bc07-27d4ec2db2b7',
        big: 'https://firebasestorage.googleapis.com/v0/b/gt-foto-angular-89a91.appspot.com/o/uploads%2FPNG_transparency_demonstration_1.png?alt=media&token=c9d06107-f025-4cf9-bc07-27d4ec2db2b7'
      },
      {
        small: 'assets/carousel1.jpg',
        medium: 'assets/carousel1.jpg',
        big: 'assets/carousel1.jpg'
      },
      {
        small: 'assets/carousel1.jpg',
        medium: 'assets/carousel1.jpg',
        big: 'assets/carousel1.jpg'
      },
      {
        small: 'assets/carousel1.jpg',
        medium: 'assets/carousel1.jpg',
        big: 'assets/carousel1.jpg'
      }
    ];
  }
}
