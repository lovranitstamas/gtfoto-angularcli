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

  getPictureList(subfolder): Observable<PortfolioPictureModel[]> {
    return this._httpClient.get<PortfolioPictureModel[]>(`${this.apiUrl}api/getPictureList.php?subfolder=${subfolder}`);
  }

  getPortfolioById(pictureId) {
    return this._httpClient.get<PortfolioPictureModel>(`${this.apiUrl}api/getPictureDatas.php?id=${pictureId}`);
  }

  delete(param: PortfolioPictureModel) {
    console.log(param);
    return this._httpClient.delete<PortfolioPictureModel>(`${this.apiUrl}api/delete.php/?id=${param.id}`);
  }

  update(param: PortfolioPictureModel) {
    console.log(param);
    return this._httpClient.put<PortfolioPictureModel>(`${this.apiUrl}api/update.php`, param);
  }

  create(param, data: File) {
    const formData = new FormData();
    formData.append('title', param.title);
    formData.append('nodeId', param.nodeId);
    formData.append('pictureURL', data, data.name);
    formData.append('createDate', param.createDate);
    console.log(formData);
    const uploadURL = `${this.apiUrl}api/upload.php`;
    return this._httpClient.post<any>(uploadURL, formData);
  }
}
