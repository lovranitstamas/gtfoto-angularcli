import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {from, Observable} from 'rxjs';
import {finalize, map, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {FileModel} from './file-model';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private basePath = '/gallery';

  constructor(private afDb: AngularFireDatabase,
              private storage: AngularFireStorage) {
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
                  {pictureURL: picture.payload.val()['pictureURL']})
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

  pushFileToStorage(model, fileUpload) {
    const node = 'engaged';
    const date: Date = new Date();
    // fileUpload.name
    const randomId = Math.random()
      .toString(36)
      .substring(2) + '.jpg';

    const filePath = `${this.basePath}/${node}/${randomId}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {

          let finalDate: string = '' + date.getFullYear();
          date.getMonth() < 10 ? finalDate = finalDate + '-0' + (date.getMonth() + 1) : finalDate = finalDate + '-' + (date.getMonth() + 1);
          date.getDate() < 10 ? finalDate = finalDate + '-0' + date.getDate() : finalDate = finalDate + '-' + date.getDate();

          model.name = 'test';
          model.date = finalDate;
          model.pictureURL = downloadURL;
          model.description = 'description';
          this.saveFileData(model);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: FileModel) {
    const node = 'engaged';
    const newRef = this.afDb.list(`${this.basePath}/${node}`).push(upload);
    const newKey = newRef.key;
    this.afDb.object(`${this.basePath}/${node}/${newKey}`).set({...upload, id: newKey});
    /*return from(
      this.afDb.list(`${this.basePath}/${node}`).push(upload)
    ).pipe(
      map((picturePostReturn: { key: string }) => {
        console.log(picturePostReturn.key);
        return picturePostReturn.key;
      }),
      switchMap(pictureId => this.afDb.object(
        `${this.basePath}/${node}/${pictureId}`).set({...upload, id: pictureId})
      )
    );*/
  }

}
