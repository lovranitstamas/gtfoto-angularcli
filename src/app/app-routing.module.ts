import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PhotogalleryComponent} from './portfolio/photogallery/photogallery.component';
import {PhotogalleryPicturesComponent} from './portfolio/photogallery/photogallery-pictures/photogallery-pictures.component';
import {PortraitComponent} from './portfolio/portrait/portrait.component';
import {PortraitListComponent} from './portfolio/portrait/portrait-list/portrait-list.component';
import {ChildAndFamilyListComponent} from './portfolio/child-and-family/child-and-family-list/child-and-family-list.component';
import {ChildAndFamilyComponent} from './portfolio/child-and-family/child-and-family.component';
import {PregnantComponent} from './portfolio/pregnant/pregnant.component';
import {PregnantListComponent} from './portfolio/pregnant/pregnant-list/pregnant-list.component';
import {ChristeningComponent} from './portfolio/christening/christening.component';
import {ChristeningListComponent} from './portfolio/christening/christening-list/christening-list.component';
import {KindergartenComponent} from './portfolio/kindergarten/kindergarten.component';
import {KindergartenListComponent} from './portfolio/kindergarten/kindergarten-list/kindergarten-list.component';
import {WeddingComponent} from './portfolio/wedding/wedding.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail/portfolio-detail.component';
import {MyserviceComponent} from './myservice/myservice.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {LoginComponent} from './user/login/login.component';
import {LoggedInGuard} from './shared/logged-in.guard';
import {WeddingSubmenuComponent} from './portfolio/wedding/wedding-submenu/wedding-submenu.component';
import {CreativeListComponent} from './portfolio/wedding/creative-list/creative-list.component';
import {EngagedListComponent} from './portfolio/wedding/engaged-list/engaged-list.component';
import {LiturgyListComponent} from './portfolio/wedding/liturgy-list/liturgy-list.component';
import {PreparationListComponent} from './portfolio/wedding/preparation-list/preparation-list.component';
import {PermissionListComponent} from './portfolio/wedding/permission-list/permission-list.component';
import {CivilCerenomyListComponent} from './portfolio/wedding/civil-cerenomy-list/civil-cerenomy-list.component';
import {DinnerPartyListComponent} from './portfolio/wedding/dinner-party-list/dinner-party-list.component';

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
        path: 'wedding', component: WeddingComponent,
        children: [
          {
            path: 'categories',
            component: WeddingSubmenuComponent
          },
          {
            path: 'creative',
            component: CreativeListComponent
          },
          {
            path: 'engaged',
            component: EngagedListComponent,
          },
          {
            path: 'preparation',
            component: PreparationListComponent
          },
          {
            path: 'permission',
            component: PermissionListComponent
          },
          {
            path: 'civil-ceremony',
            component: CivilCerenomyListComponent
          },
          {
            path: 'liturgy',
            component: LiturgyListComponent
          },
          {
            path: 'dinner-party',
            component: DinnerPartyListComponent
          }
        ]
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
    WeddingSubmenuComponent,
    CreativeListComponent,
    EngagedListComponent,
    PreparationListComponent,
    PermissionListComponent,
    CivilCerenomyListComponent,
    LiturgyListComponent,
    DinnerPartyListComponent,
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
