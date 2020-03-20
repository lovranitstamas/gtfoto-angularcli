import {Inject, Injectable} from '@angular/core';
import {PortfolioPictureModel} from './portfolio-picture-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private _httpClient: HttpClient,  @Inject('API_URL') private apiUrl: string) {
  }

  getAllPortraitPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getPortraitPhotos.php`);
  }

  getAllChildAndFamilyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getChildAndFamilyPhotos.php`);
  }

  getAllPregnantPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getPregnantPhotos.php`);
  }

  getAllChristeningPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getChristeningPhotos.php`);
  }

  getAllKindergartenPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getKindergartenPhotos.php`);
  }

  getAllCreativePictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getCreativePhotos.php`);
  }

  getAllEngagedPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getEngagedPhotos.php`);
  }

  getAllPreparationPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getPreparationPhotos.php`);
  }

  getAllPermissionPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getPermissionPhotos.php`);
  }

  getAllCivilCerenomyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getCivilCerenomyPhotos.php`);
  }

  getAllLiturgyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getLiturgyPhotos.php`);
  }

  getAllDinnerPartyPictures(): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getDinnerPartyPhotos.php`);
  }

  getPortfolioById(pictureId) {
    return this._httpClient.get<PortfolioPictureModel>(`${this.apiUrl}api/getPictureDatas.php?id=${pictureId}`);
  }

  delete(param: PortfolioPictureModel) {
    return this._httpClient.delete<PortfolioPictureModel>(`${this.apiUrl}api/delete.php/?id=${param.id}`);
  }

  update(param: PortfolioPictureModel) {
    return this._httpClient.put<PortfolioPictureModel>(`${this.apiUrl}api/update.php`, param);
  }

  create(param: PortfolioPictureModel, data: File) {
    const formData: FormData = new FormData();
    formData.append('title', param.title);
    formData.append('createDate', param.createDate);
    formData.append('node', param.node);
    formData.append('pictureURL', data, data.name);
    const uploadURL = `${this.apiUrl}api/upload.php`;
    return this._httpClient.post<any>(uploadURL, formData);
  }
}
