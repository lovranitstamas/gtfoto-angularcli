import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from "./portfolio-picture-model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _portfolioPictures: PortfolioPictureModel[];

  constructor() {
    this._portfolioPictures = [
      {
        id: 1,
        name: 'Sziget Fesztivál',
        date: '2017-08-03',
        pictureURL: 'assets/sziget.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        id: 2,
        name: 'Diótörő Balett',
        date: '2017-11-23',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 3,
        name: 'Macskák Musical',
        date: '2018-02-11',
        pictureURL: 'assets/macskak.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        id: 4,
        name: 'Sziget Fesztivál',
        date: '2017-08-03',
        pictureURL: 'assets/sziget.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        id: 5,
        name: 'Diótörő Balett',
        date: '2017-11-23',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 6,
        name: 'Macskák Musical',
        date: '2018-02-11',
        pictureURL: 'assets/macskak.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        id: 7,
        name: 'Sziget Fesztivál',
        date: '2017-08-03',
        pictureURL: 'assets/sziget.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        id: 8,
        name: 'Diótörő Balett',
        date: '2017-11-23',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Pali-_Shri_Ballaleshwar.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 9,
        name: 'Macskák Musical',
        date: '2018-02-11',
        pictureURL: 'assets/macskak.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      }
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
