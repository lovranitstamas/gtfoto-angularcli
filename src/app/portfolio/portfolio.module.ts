import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';
import {NgxGalleryModule} from 'ngx-gallery'; // use to gallery
import {NgxMasonryModule} from 'ngx-masonry';

import {PortfolioDetailComponent} from './portfolio-detail/portfolio-detail.component';

import {PhotogalleryComponent} from './main-menu/photogallery/photogallery.component';
import {PhotogalleryPicturesComponent} from './main-menu/photogallery/photogallery-pictures/photogallery-pictures.component';
import {PortraitComponent} from './main-menu/portrait/portrait.component';
import {PortraitListComponent} from './main-menu/portrait/portrait-list/portrait-list.component';
import {ChildAndFamilyListComponent} from './main-menu/child-and-family/child-and-family-list/child-and-family-list.component';
import {ChildAndFamilyComponent} from './main-menu/child-and-family/child-and-family.component';
import {PregnantComponent} from './main-menu/pregnant/pregnant.component';
import {PregnantListComponent} from './main-menu/pregnant/pregnant-list/pregnant-list.component';
import {ChristeningComponent} from './main-menu/christening/christening.component';
import {ChristeningListComponent} from './main-menu/christening/christening-list/christening-list.component';
import {KindergartenComponent} from './main-menu/kindergarten/kindergarten.component';
import {KindergartenListComponent} from './main-menu/kindergarten/kindergarten-list/kindergarten-list.component';
import {WeddingComponent} from './wedding/wedding.component';
import {WeddingModule, weddingRoutes as weddingChildRoutes} from './wedding/wedding.module';

import {LoggedInGuard} from '../shared/logged-in.guard';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';

export const portfolioRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'photogallery', component: PhotogalleryComponent, children: [
          {path: '', component: PhotogalleryPicturesComponent}]
      },
      {
        path: 'portrait', component: PortraitComponent, children: [
          {path: '', component: PortraitListComponent}]
      },
      {
        path: 'child-and-family', component: ChildAndFamilyComponent, children: [
          {path: '', component: ChildAndFamilyListComponent}]
      },
      {
        path: 'pregnant', component: PregnantComponent, children: [
          {path: '', component: PregnantListComponent}]
      },
      {
        path: 'christening', component: ChristeningComponent, children: [
          {path: '', component: ChristeningListComponent}]
      },
      {
        path: 'kindergarten', component: KindergartenComponent, children: [
          {path: '', component: KindergartenListComponent}]
      },
      {
        path: 'wedding', component: WeddingComponent, children: weddingChildRoutes
      },
      {path: 'new', component: PortfolioDetailComponent, canActivate: [LoggedInGuard]},
      {path: ':node/:id', component: PortfolioDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    PortfolioDetailComponent,

    PhotogalleryComponent,
    PhotogalleryPicturesComponent,
    PortraitComponent,
    PortraitListComponent,
    ChildAndFamilyComponent,
    ChildAndFamilyListComponent,
    PregnantComponent,
    PregnantListComponent,
    ChristeningComponent,
    ChristeningListComponent,
    KindergartenComponent,
    KindergartenListComponent,
    WeddingComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxGalleryModule,
    NgxMasonryModule,
    RouterModule,
    FormsModule,
    AlertModule.forRoot(),
    WeddingModule
  ],
  exports: [
  ]
})
export class PortfolioModule {
}
