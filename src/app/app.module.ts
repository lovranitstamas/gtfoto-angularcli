import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AlertModule} from 'ngx-bootstrap'; // use in user and contact menu
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

import {UserService} from './shared/user.service';
import {PortfolioService} from './shared/portfolio.service';
import {ContactService} from './shared/contact.service';
import {LoggedInGuard} from './shared/logged-in.guard';
import {HttpClientModule} from '@angular/common/http';
import {MomentModule} from 'angular2-moment';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PortfolioModule} from './portfolio/portfolio.module'; // use in user and contact menu


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ...AppRoutingModule.routableComponents,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    PortfolioModule
  ],
  providers: [
    UserService,
    PortfolioService,
    LoggedInGuard,
    ContactService,
    // {provide: 'API_URL', useValue: 'http://localhost:1234/'}
    {provide: 'API_URL', useValue: './'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
