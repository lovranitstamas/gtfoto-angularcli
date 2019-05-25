import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from "./portfolio-picture-model";
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {map,switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private _http: HttpClient) {
    /*this._portfolioPictures = [
      new PortfolioPictureModel({
        id: 1,
        name: 'Fezen',
        date: '2017-08-03',
        pictureURL: 'http://mafsz.org/wp-content/uploads/2014/05/fezen.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      }),
      new PortfolioPictureModel({
        id: 2,
        name: 'SZIN',
        date: '2017-11-23',
        pictureURL: 'https://www.koncert.hu/uploads/concerts/koncert-20140625-11470-szin_2014_2.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      }),
      new PortfolioPictureModel({
        id: 3,
        name: 'Rockmaraton',
        date: '2018-02-11',
        pictureURL: 'http://www.rockmaraton.hu/media/images/rockmaraton-2018-jegyvasarlas.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      }),
      new PortfolioPictureModel({
        id: 4,
        name: 'Black Hat USA',
        date: '2017-08-03',
        pictureURL: 'https://www.blackhat.com/images/page-graphics/metatag/event-logo-us17.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      }),
      new PortfolioPictureModel({
        id: 5,
        name: 'TEdx',
        date: '2017-11-23',
        pictureURL: 'https://i0.wp.com/www.tedxwellington.com/wp-content/uploads/2017/02/tedx-bulb.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      }),
      new PortfolioPictureModel({
        id: 6,
        name: 'ng-conf',
        date: '2018-02-11',
        pictureURL: 'https://cdn-images-1.medium.com/max/1270/1*2j7MOWb0s5pZpQLu7d-5CQ.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      }),
      new PortfolioPictureModel({
        id: 7,
        name: 'Sziget Fesztivál',
        date: '2017-08-03',
        pictureURL: 'assets/sziget.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      }),
      new PortfolioPictureModel({
        id: 8,
        name: 'Diótörő Balett',
        date: '2017-11-23',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      }),
      new PortfolioPictureModel({
        id: 9,
        name: 'Macskák Musical',
        date: '2018-02-11',
        pictureURL: 'assets/macskak.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      })
    ];*/
  }

  getAllPortfolios(): Observable<PortfolioPictureModel[]> {
    //return this._portfolioPictures;
    return this._http.get<PortfolioPictureModel[]>(`${environment.firebase.baseUrl}/events.json`).pipe(
      map(data => Object.values(data).map(evm => new PortfolioPictureModel(evm))));
  }

  getPortfolioById(id: string) {
    //const portfolioPicture = this._portfolioPictures.filter(x => x.id === +id);
    //return portfolioPicture.length > 0 ? portfolioPicture[0] : new PortfolioPictureModel(PortfolioPictureModel.emptyPortfolio);
    return this._http.get<PortfolioPictureModel>(`${environment.firebase.baseUrl}/events/${id}.json`); 
  }

  save(param: PortfolioPictureModel) {
    //console.log(param);
    if (param.id) {
      return this._http.put(`${environment.firebase.baseUrl}/events/${param.id}.json`, param);
    } else {
      return this._http.post(`${environment.firebase.baseUrl}/events.json`, param).pipe( 
        map((fbPostReturn: { name: string }) => fbPostReturn.name)).pipe(  
        switchMap(fbId => this._http.patch(  
          `${environment.firebase.baseUrl}/events/${fbId}.json`,  
          {id: fbId}   
        )));  
    }
  }

  delete(param: PortfolioPictureModel) {
    return this._http.delete(`${environment.firebase.baseUrl}/events/${param.id}.json`);
  }

}
