import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {ScrollTopComponent} from './scroll-top/scroll-top.component';
import {CollapseModule, BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    ScrollTopComponent
  ]
})
export class CoreModule {
}
