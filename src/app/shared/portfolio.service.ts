import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {from, Observable} from 'rxjs';
import {finalize, map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private basePath = '/gallery';

  constructor(private afDb: AngularFireDatabase,
              private storage: AngularFireStorage) {
  }

  getAllPortfolios(node): Observable<PortfolioPictureModel[]> {
    return this.afDb.list(`${this.basePath}/${node}`).snapshotChanges()
      .pipe(
        map(
          (pictures) =>
            pictures.map(
              picture => {
                return new PortfolioPictureModel(Object.assign({},
                  // {description: picture.payload.val()['description']},
                  {name: picture.payload.val()['name']},
                  {id: picture.key},
                  {_date: picture.payload.val()['date']},
                  {pictureURL: picture.payload.val()['pictureURL']},
                  {node: picture.payload.val()['node']},
                  {storageRef: picture.payload.val()['storageRef']})
                );
              }
            )
        )
      );
  }

  getPortfolioById(node: string, id: string) {
    return this.afDb.object<any>(`${this.basePath}/${node}/${id}`).valueChanges();
  }

  modify(param: PortfolioPictureModel) {
    return from(this.afDb.object(`${this.basePath}/${param.node}/${param.id}`).update(param));
  }

  save(param: PortfolioPictureModel, file) {
    // fileUpload.name

    const randomId = Math.random()
      .toString(36)
      .substring(2) + '.jpg';

    const filePath = `${this.basePath}/${param.node}/${randomId}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          param.pictureURL = downloadURL;
          param.storageRef = randomId;
          this.saveFileData(param);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();

  }

  delete(param: PortfolioPictureModel) {
    const filePath = `${this.basePath}/${param.node}/${param.storageRef}`;

    this.storage.ref(filePath).delete();
    return from(this.afDb.object(`${this.basePath}/${param.node}/${param.id}`).remove());
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: PortfolioPictureModel) {
    const newRef = this.afDb.list(`${this.basePath}/${upload.node}`).push(upload);
    const newKey = newRef.key;
    this.afDb.object(`${this.basePath}/${upload.node}/${newKey}`).set({...upload, id: newKey});
  }

  getAllEngagedPictures(): Observable<PortfolioPictureModel[]> {
    return this.afDb.list(`${this.basePath}/engaged`).snapshotChanges()
      .pipe(
        map(
          (pictures) =>
            pictures.map(
              picture => {
                return new PortfolioPictureModel(Object.assign({},
                  {name: picture.payload.val()['name']},
                  {id: picture.key},
                  {_date: picture.payload.val()['date']},
                  {pictureURL: picture.payload.val()['pictureURL']},
                  {node: picture.payload.val()['node']},
                  {storageRef: picture.payload.val()['storageRef']})
                );
              }
            )
        )
      );
  }
}
