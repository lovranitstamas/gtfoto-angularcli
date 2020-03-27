import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {NgxMasonryModule} from 'ngx-masonry';

import {PortfolioModule} from '../portfolio.module';
import {TopicsComponent} from './topics/topics.component';
import {CreativeListComponent} from './creative-list/creative-list.component';
import {EngagedListComponent} from './engaged-list/engaged-list.component';
import {LiturgyListComponent} from './liturgy-list/liturgy-list.component';
import {PreparationListComponent} from './preparation-list/preparation-list.component';
import {PermissionListComponent} from './permission-list/permission-list.component';
import {CivilCerenomyListComponent} from './civil-cerenomy-list/civil-cerenomy-list.component';
import {DinnerPartyListComponent} from './dinner-party-list/dinner-party-list.component';

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
    TopicsComponent,
    CreativeListComponent,
    EngagedListComponent,
    PreparationListComponent,
    PermissionListComponent,
    CivilCerenomyListComponent,
    LiturgyListComponent,
    DinnerPartyListComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxMasonryModule,
    PortfolioModule,
    RouterModule
  ]
})
export class WeddingModule {
}
