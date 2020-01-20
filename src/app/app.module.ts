import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AlertModule, BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {StatisticsComponent} from './statement/statistics/statistics.component';
import {SurveyComponent} from './statement/survey/survey.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {FooterComponent} from './core/footer/footer.component';
import {ScrollTopComponent} from './core/scroll-top/scroll-top.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {PortfoliocardComponent} from './portfolio/portfoliocard/portfoliocard.component';
import {AppRoutingModule} from './app-routing.module';
// import {MasonryGalleryModule} from 'ngx-masonry-gallery'; // replace with NgxMasonryModule
import {NgxGalleryModule} from 'ngx-gallery'; // use to gallery
import {UserService} from './shared/user.service';
import {PortfolioService} from './shared/portfolio.service';
import {LoggedInGuard} from './shared/logged-in.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import {LoadingSpinnerComponent} from './core/loading-spinner/loading-spinner.component';
import {environment} from '../environments/environment';
import {MomentModule} from 'angular2-moment';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';
import {ContactService} from './shared/contact.service';
import {NgxMasonryModule} from 'ngx-masonry';
import { AngularFireStorageModule } from '@angular/fire/storage';
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

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    SurveyComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    FooterComponent,
    ScrollTopComponent,
    NavbarComponent,
    PortfoliocardComponent,
    LoadingSpinnerComponent,
    ...AppRoutingModule.routableComponents,
    ContactFormComponent,
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
    WeddingListComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    // MasonryGalleryModule,
    NgxGalleryModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MomentModule,
    ReactiveFormsModule,
    NgxMasonryModule
  ],
  providers: [
    UserService,
    PortfolioService,
    LoggedInGuard,
    ContactService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
