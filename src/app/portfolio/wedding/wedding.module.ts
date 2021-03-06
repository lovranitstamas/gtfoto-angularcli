import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {NgxMasonryModule} from 'ngx-masonry';

import {TopicsComponent} from './topics/topics.component';
import {CreativeListComponent} from './creative-list/creative-list.component';
import {EngagedListComponent} from './engaged-list/engaged-list.component';
import {LiturgyListComponent} from './liturgy-list/liturgy-list.component';
import {PreparationListComponent} from './preparation-list/preparation-list.component';
import {PermissionListComponent} from './permission-list/permission-list.component';
import {CivilCerenomyListComponent} from './civil-cerenomy-list/civil-cerenomy-list.component';
import {DinnerPartyListComponent} from './dinner-party-list/dinner-party-list.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

import {PortfoliocardComponent} from '../portfoliocard/portfoliocard.component';
import {PortfolioUploadLinkComponent} from '../portfolio-upload-link/portfolio-upload-link.component';
import {PortfolioHeaderComponent} from '../portfolio-header/portfolio-header.component';
import {PortfolioListComponent} from '../portfolio-list/portfolio-list.component';
import { PortfolioSearchingBoxComponent } from '../portfolio-searching-box/portfolio-searching-box.component';

export const weddingRoutes: Routes = [
  {path: '', component: TopicsComponent, pathMatch: 'full'},
  {path: 'creative', component: CreativeListComponent},
  {path: 'engaged', component: EngagedListComponent},
  {path: 'preparation', component: PreparationListComponent},
  {path: 'permission', component: PermissionListComponent},
  {path: 'civil-ceremony', component: CivilCerenomyListComponent},
  {path: 'liturgy', component: LiturgyListComponent},
  {path: 'dinner-party', component: DinnerPartyListComponent}
];

@NgModule({
  declarations: [
    PortfoliocardComponent,
    PortfolioHeaderComponent,
    PortfolioListComponent,
    PortfolioSearchingBoxComponent,
    PortfolioUploadLinkComponent,

    TopicsComponent,
    BreadcrumbComponent,
    CreativeListComponent,
    EngagedListComponent,
    PreparationListComponent,
    PermissionListComponent,
    CivilCerenomyListComponent,
    LiturgyListComponent,
    DinnerPartyListComponent
  ],
  exports: [
    PortfoliocardComponent,
    PortfolioHeaderComponent,
    PortfolioListComponent,
    PortfolioSearchingBoxComponent,
    PortfolioUploadLinkComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxMasonryModule,
    RouterModule
  ]
})
export class WeddingModule {
}
