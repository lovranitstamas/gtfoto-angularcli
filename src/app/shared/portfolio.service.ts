import {Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  PHP_API_SERVER = './';

  constructor(private afDb: AngularFireDatabase,
              private storage: AngularFireStorage,
              private _httpClient: HttpClient) {
  }

  getAllPortraitPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getPortraitPhotos.php`);
  }

  getAllChildAndFamilyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getChildAndFamilyPhotos.php`);
  }

  getAllPregnantPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getPregnantPhotos.php`);
  }

  getAllChristeningPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getChristeningPhotos.php`);
  }

  getAllKindergartenPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getKindergartenPhotos.php`);
  }

  getAllCreativePictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getCreativePhotos.php`);
  }

  getAllEngagedPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getEngagedPhotos.php`);
  }

  getAllPreparationPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getPreparationPhotos.php`);
  }

  getAllPermissionPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getPermissionPhotos.php`);
  }

  getAllCivilCerenomyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getCivilCerenomyPhotos.php`);
  }

  getAllLiturgyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getLiturgyPhotos.php`);
  }

  getAllDinnerPartyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getDinnerPartyPhotos.php`);
  }




  getAllWeddingPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.PHP_API_SERVER}api/getLiturgyPhotos.php`);
  }

  getPortfolioById(pictureId) {
    return this._httpClient.get<PortfolioPictureModel>(`${this.PHP_API_SERVER}api/getPictureDatas.php?id=${pictureId}`);
  }

  delete(param: PortfolioPictureModel) {
    return this._httpClient.delete<PortfolioPictureModel>(`${this.PHP_API_SERVER}api/delete.php/?id=${param.id}`);
  }

  update(param: PortfolioPictureModel) {
    return this._httpClient.put<PortfolioPictureModel>(`${this.PHP_API_SERVER}api/update.php`, param);
  }

  create(param: PortfolioPictureModel, data: File) {
    const formData: FormData = new FormData();
    formData.append('title', param.title);
    formData.append('createDate', param.createDate);
    formData.append('node', param.node);
    formData.append('pictureURL', data, data.name);
    const uploadURL = `${this.PHP_API_SERVER}api/upload.php`;
    return this._httpClient.post<any>(uploadURL, formData);
  }
}
