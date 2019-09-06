import {AfterViewInit, Component} from '@angular/core';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';
import * as $ from 'jquery';

@Component({
  selector: 'app-engaged-list',
  templateUrl: './engaged-list.component.html',
  styleUrls: ['./engaged-list.component.scss']
})
export class EngagedListComponent implements AfterViewInit {
  private _urls: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/gt-foto-angular-89a91.appspot.com/o/uploads%2FPNG_transparency_demonstration_1.png?alt=media&token=c9d06107-f025-4cf9-bc07-27d4ec2db2b7',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg'
  ];

  public get images(): IMasonryGalleryImage[] {
    return this._urls.map(
      m =>
        <IMasonryGalleryImage> {
          imageUrl: m
        }
    );
  }

  public ngAfterViewInit() {
    $(document).ready(() => {
      setTimeout(() => {
        $('.masonry div img').each(function() {
          $(this).wrap('<div class="hover-zoom-box"></div>');
        });
      }, 200);
    });
  }
}
