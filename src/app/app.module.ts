import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule, BsDropdownModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {EngagedComponent} from './portfolio/engaged/engaged.component';
import {EngagedListComponent} from './portfolio/engaged/engaged-list/engaged-list.component';
import {PortfoliocardComponent} from './portfolio/portfoliocard/portfoliocard.component';
import {PortfolioDetailComponent} from './portfolio/portfolio-detail/portfolio-detail.component';
import {StatisticsComponent} from './statement/statistics/statistics.component';
import {SurveyComponent} from './statement/survey/survey.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {FooterComponent} from './core/footer/footer.component';
import {ScrollTopComponent} from './core/scroll-top/scroll-top.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EngagedComponent,
    EngagedListComponent,
    PortfoliocardComponent,
    PortfolioDetailComponent,
    StatisticsComponent,
    SurveyComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    FooterComponent,
    ScrollTopComponent,
    NavbarComponent,
    ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
