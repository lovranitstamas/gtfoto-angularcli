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
  private basePath = '/gallery';

  constructor(private afDb: AngularFireDatabase) {
  }

  getAllPortfolios(): Observable<PortfolioPictureModel[]> {
    const node = 'engaged';
    return this.afDb.list(`${this.basePath}/${node}`).snapshotChanges()
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
                  {pictureURL: picture.payload.val()['pictureURL']},
                  {progress: picture.payload.val()['progress']})
                );
              }
            )
        )
      );
  }

  getPortfolioById(id: string) {
    const node = 'engaged';
    return this.afDb.object<any>(`${this.basePath}/${node}/${id}`).valueChanges();
  }

  save(param: PortfolioPictureModel) {
    const node = 'engaged';
    if (param.id) {
      return from(this.afDb.object(`${this.basePath}/${node}/${param.id}`).update(param));
    } else {
      return from(
        this.afDb.list(`${this.basePath}/${node}`).push(param)
      ).pipe(
        map((picturePostReturn: { key: string }) => {
          return picturePostReturn.key;
        }),

        switchMap(pictureId => this.afDb.object(
          `${this.basePath}/${node}/${pictureId}`).set({...param, id: pictureId})
        )
      );
    }
  }

  delete(param: PortfolioPictureModel) {
    const node = 'engaged';
    return from(this.afDb.object(`${this.basePath}/${node}/${param.id}`).remove());
  }


  pushUpload(upload: FileModel) {
    const node = 'engaged';
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${node}/${upload.file.name}`).put(upload.file);

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
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          // const imageUrl = downloadURL;
          upload.id = 'tesztid';
          upload.name = upload.file.name;
          upload.date = '2011-11-11';
          upload.pictureURL = downloadURL;
          upload.description = 'description';
          this.saveFileData(upload);
        });

      }
    );
  }


  // Writes the file details to the realtime db
  private saveFileData(upload: FileModel) {
    const node = 'engaged';
    this.afDb.list(`${this.basePath}/${node}`).push(upload);
  }

}
