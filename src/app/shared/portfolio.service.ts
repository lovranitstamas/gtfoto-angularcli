import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from "./portfolio-picture-model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _portfolioPictures: PortfolioPictureModel[];

  constructor() {
    this._portfolioPictures = [
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
    ];
  }

  getAllPortfolios(): PortfolioPictureModel[] {
    return this._portfolioPictures;
  }

  getPortfolioById(id: number) {
    const portfolioPicture = this._portfolioPictures.filter(x => x.id === id);
    return portfolioPicture.length > 0 ? portfolioPicture[0] : new PortfolioPictureModel(PortfolioPictureModel.emptyPortfolio);
  }

  update(param: PortfolioPictureModel) {
    this._portfolioPictures = this._portfolioPictures.map(portfolioPicture => {
      /*if (portfolioPicture.id === param.id) {
        return {...param}
      } else {
        return portfolioPicture;
      }*/
      return portfolioPicture.id === param.id ? {...param} : portfolioPicture;
    });
  }

  create(param: PortfolioPictureModel) {
    this._portfolioPictures = [
      ...this._portfolioPictures,
      {
        id: this._getMaxId() + 1,
        ...param
      }
    ]
  }

  private _getMaxId() {
    return this._portfolioPictures.reduce((x, y) => x.id > y.id ? x : y).id;
  }

}
