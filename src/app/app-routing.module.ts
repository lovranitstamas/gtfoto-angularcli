import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {EngagedComponent} from './portfolio/engaged/engaged.component';
import {EngagedListComponent} from './portfolio/engaged/engaged-list/engaged-list.component';
import {PhotogalleryComponent} from './portfolio/photogallery/photogallery.component';
import {PhotogalleryPicturesComponent} from './portfolio/photogallery/photogallery-pictures/photogallery-pictures.component';
import {MyserviceComponent} from './myservice/myservice.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'portfolio',
    children: [
      {path: 'engaged-list', component: EngagedListComponent},
      {path: 'photogallery-pictures', component: PhotogalleryPicturesComponent}
    ]
  },
  {path: 'myservice', component: MyserviceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EngagedListComponent,
    PhotogalleryPicturesComponent,
    MyserviceComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ];
}
