import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule, BsDropdownModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {EngagedComponent} from './portfolio/engaged/engaged.component';
import {EngagedListComponent} from './portfolio/engaged/engaged-list/engaged-list.component';
import {PortfoliocardComponent} from './portfolio/portfoliocard/portfoliocard.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail/portfolio-detail.component';
import {MyserviceComponent} from './myservice/myservice.component';
import {AboutComponent} from './about/about.component';
import {StatisticsComponent} from './statement/statistics/statistics.component';
import {SurveyComponent} from './statement/survey/survey.component';
import {ContactComponent} from './contact/contact.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {FooterComponent} from './core/footer/footer.component';
import {ScrollTopComponent} from './core/scroll-top/scroll-top.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EngagedComponent,
    EngagedListComponent,
    PortfoliocardComponent,
    PortfolioDetailComponent,
    MyserviceComponent,
    AboutComponent,
    StatisticsComponent,
    SurveyComponent,
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    FooterComponent,
    ScrollTopComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
