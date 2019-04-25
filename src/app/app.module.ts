import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ScrollTopComponent} from './scroll-top/scroll-top.component';
import {CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
