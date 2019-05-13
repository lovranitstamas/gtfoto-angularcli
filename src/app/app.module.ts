import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AlertModule, CollapseModule, BsDropdownModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {StatisticsComponent} from './statement/statistics/statistics.component';
import {SurveyComponent} from './statement/survey/survey.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {FooterComponent} from './core/footer/footer.component';
import {ScrollTopComponent} from './core/scroll-top/scroll-top.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {PortfoliocardComponent} from './portfolio/portfoliocard/portfoliocard.component';
import {AppRoutingModule} from './app-routing.module';
import {MasonryGalleryModule} from 'ngx-masonry-gallery';
import {NgxGalleryModule} from 'ngx-gallery';
import {UserService} from './shared/user.service';
import {PortfolioService} from "./shared/portfolio.service";
import {LoggedInGuard} from './shared/logged-in.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    SurveyComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    FooterComponent,
    ScrollTopComponent,
    NavbarComponent,
    PortfoliocardComponent,
    ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    MasonryGalleryModule,
    NgxGalleryModule,
    FormsModule
  ],
  providers: [UserService,PortfolioService,LoggedInGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
