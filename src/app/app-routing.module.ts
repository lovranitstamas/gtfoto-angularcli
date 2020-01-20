import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PhotogalleryComponent} from './portfolio/photogallery/photogallery.component';
import {PhotogalleryPicturesComponent} from './portfolio/photogallery/photogallery-pictures/photogallery-pictures.component';
import {EngagedComponent} from './portfolio/engaged/engaged.component';
import {EngagedListComponent} from './portfolio/engaged/engaged-list/engaged-list.component';
import { CreativeComponent } from './portfolio/creative/creative.component';
import { CreativeListComponent } from './portfolio/creative/creative-list/creative-list.component';
import { PortraitComponent } from './portfolio/portrait/portrait.component';
import { PortraitListComponent } from './portfolio/portrait/portrait-list/portrait-list.component';
import { ChildAndFamilyListComponent } from './portfolio/child-and-family/child-and-family-list/child-and-family-list.component';
import { ChildAndFamilyComponent } from './portfolio/child-and-family/child-and-family.component';
import { PregnantComponent } from './portfolio/pregnant/pregnant.component';
import { PregnantListComponent } from './portfolio/pregnant/pregnant-list/pregnant-list.component';
import { ChristeningComponent } from './portfolio/christening/christening.component';
import { ChristeningListComponent } from './portfolio/christening/christening-list/christening-list.component';
import { KindergartenComponent } from './portfolio/kindergarten/kindergarten.component';
import { KindergartenListComponent } from './portfolio/kindergarten/kindergarten-list/kindergarten-list.component';
import { WeddingComponent } from './portfolio/wedding/wedding.component';
import { WeddingListComponent } from './portfolio/wedding/wedding-list/wedding-list.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail/portfolio-detail.component';
import {MyserviceComponent} from './myservice/myservice.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {LoginComponent} from './user/login/login.component';
import {LoggedInGuard} from './shared/logged-in.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'portfolio',
    children: [
      {
        path: 'photogallery', component: PhotogalleryComponent, children: [
          {path: '', component: PhotogalleryPicturesComponent}]
      },
      {
        path: 'engaged', component: EngagedComponent, children: [
          {path: '', component: EngagedListComponent}]
      },
      {
        path: 'creative', component: CreativeComponent, children: [
          {path: '', component: CreativeListComponent}]
      },
      {
        path: 'portrait', component: PortraitComponent, children: [
          {path: '', component: PortraitListComponent}]
      },
      {
        path: 'childandfamily', component: ChildAndFamilyComponent, children: [
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
        path: 'wedding', component: WeddingComponent, children: [
          {path: '', component: WeddingListComponent}]
      },
      {path: 'new', component: PortfolioDetailComponent, canActivate: [LoggedInGuard]},
      {path: ':node/:id', component: PortfolioDetailComponent}
    ]
  },
  {path: 'myservice', component: MyserviceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'user',
    children: [
      {path: '', component: ProfileComponent, canActivate: [LoggedInGuard]},
      {path: 'edit', component: ProfileEditComponent, canActivate: [LoggedInGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: ProfileEditComponent}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    PhotogalleryComponent,
    PhotogalleryPicturesComponent,
    EngagedComponent,
    EngagedListComponent,
    CreativeComponent,
    CreativeListComponent,
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
    WeddingComponent,
    WeddingListComponent,
    PortfolioDetailComponent,
    MyserviceComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    PageNotFoundComponent
  ];
}
