import {Component, AfterViewInit} from '@angular/core';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';
import * as $ from 'jquery';

@Component({
  selector: 'app-engaged-list',
  templateUrl: './engaged-list.component.html',
  styleUrls: ['./engaged-list.component.scss']
})
export class EngagedListComponent {
  public ngAfterViewInit() {
    $(document).ready(function() {
      setTimeout(function() {
        $('.masonry div img').each(function() {
          $(this).wrap('<div class="hover-zoom-box"></div>');
        });
      }, 200);
    });
  }

  private urls: string[] = [
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg',
    'assets/carousel1.jpg'
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(
      m =>
        <IMasonryGalleryImage>{
          imageUrl: m
        }
    );
  }
}
