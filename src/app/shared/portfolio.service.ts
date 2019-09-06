import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {FileModel} from './file-model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private basePath = '/uploads';

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


  pushUpload(upload: FileModel) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }


  // Writes the file details to the realtime db
  private saveFileData(upload: FileModel) {
    this.afDb.list(`${this.basePath}/`).push(upload);
  }

}
