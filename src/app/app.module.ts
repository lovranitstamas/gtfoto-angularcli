import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AlertModule, BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
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
import {HttpClientModule} from '@angular/common/http';
import {LoadingSpinnerComponent} from './core/loading-spinner/loading-spinner.component';
import {MomentModule} from 'angular2-moment';
import {ContactService} from './shared/contact.service';
import {NgxMasonryModule} from 'ngx-masonry';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ScrollTopComponent,
    NavbarComponent,
    ContactFormComponent,
    PortfoliocardComponent,
    LoadingSpinnerComponent,
    ...AppRoutingModule.routableComponents,
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
