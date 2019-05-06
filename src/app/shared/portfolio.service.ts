import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from "./portfolio-picture-model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _portfolios: PortfolioPictureModel[];

  constructor() {
    this._portfolios = [
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
        pictureURL: 'assets/diotoro.jpg',
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
    return this._portfolios;
  }

}
