import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) {
  }

  sendMessage(senderParam: string, emailParam: string, subjectParam: string, messageParam: string) {
    // return this._http.put(`${environment.firebase.baseUrl}/contactMessages.json`,
    // Object.assign({}, {sender: senderParam, email: emailParam, subject: subjectParam, message: messageParam})
    // );
    return this._http.post(`${environment.firebase.baseUrl}/contactMessages.json`,
      Object.assign({}, {sender: senderParam, email: emailParam, subject: subjectParam, message: messageParam})
    ).pipe(
      map((fbPostReturn: { name: string }) => fbPostReturn.name)).pipe(
      switchMap(fbId => this._http.patch(
        `${environment.firebase.baseUrl}/contactMessages/${fbId}.json`,
        {id: fbId}
      )));
  }
}
