import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PhotogalleryComponent} from './portfolio/photogallery/photogallery.component';
import {PhotogalleryPicturesComponent} from './portfolio/photogallery/photogallery-pictures/photogallery-pictures.component';
import {EngagedComponent} from './portfolio/engaged/engaged.component';
import {EngagedListComponent} from './portfolio/engaged/engaged-list/engaged-list.component';
import {TestComponent} from "./portfolio/test/test.component";
import {TestListComponent} from "./portfolio/test/test-list/test-list.component";
import {PortfolioDetailComponent} from "./portfolio/portfolio-detail/portfolio-detail.component";
import {MyserviceComponent} from './myservice/myservice.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {LoggedInGuard} from './shared/logged-in.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'portfolio',
    children: [
      {
        path: 'photogallery', component: PhotogalleryComponent, children: [
          {path: 'pictures', component: PhotogalleryPicturesComponent}]
      },
      {
        path: 'engaged', component: EngagedComponent, children: [
          {path: 'list', component: EngagedListComponent}]
      },
      {
        path: 'test', component: TestComponent, children: [
          {path: 'list', component: TestListComponent}]
      },
      {path: 'new', component: PortfolioDetailComponent},
      {path: ':id', component: PortfolioDetailComponent}
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
      {path: 'registration', component: RegistrationComponent}
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
    TestComponent,
    TestListComponent,
    PortfolioDetailComponent,
    MyserviceComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileEditComponent,
    PageNotFoundComponent
  ];
}
