import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private afDb: AngularFireDatabase) {
  }

  getAllPortfolios(): Observable<PortfolioPictureModel[]> {
    return this.afDb.list('events/').snapshotChanges()
      .pipe(
        map(
          (pictures) =>
            pictures.map(
              picture => {
                return new PortfolioPictureModel(Object.assign({},
                  {date: picture.payload.val()['date']},
                  {description: picture.payload.val()['description']},
                  {id: picture.key},
                  {name: picture.payload.val()['name']},
                  {pictureURL: picture.payload.val()['pictureURL']})
                );
              }
            )
        )
      );
  }

  getPortfolioById(id: string) {
    return this.afDb.object<any>(`events/${id}`).valueChanges();
  }

  save(param: PortfolioPictureModel) {
    if (param.id) {
      return from(this.afDb.object(`events/${param.id}`).update(param));
    } else {
      return from(
        this.afDb.list(`events`).push(param)
      ).pipe(
        map((eventPostReturn: { key: string }) => {
          return eventPostReturn.key;
        }),

        switchMap(eventId => this.afDb.object(
          `events/${eventId}`).set({...param, id: eventId})
        )
      );
    }
  }

  delete(param: PortfolioPictureModel) {
    return from(this.afDb.object(`events/${param.id}`).remove());
  }

}
