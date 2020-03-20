import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PHP_API_SERVER = './';
  isLoggedIn$ = new ReplaySubject<boolean>(1);
  adminStatus$ = new ReplaySubject<boolean>(1);
  private _user = new ReplaySubject<UserModel>(1);

  constructor(private _router: Router,
              private _httpClient: HttpClient,
              @Inject('API_URL') private apiUrl: string
  ) {
  }

  login(loginObj): Observable<UserModel | number> {
    return this._httpClient.post<UserModel | number>(`${this.apiUrl}api/loginUser.php`, loginObj);
  }

  setUserToActive(remoteUser) {
    this._user.next(remoteUser as UserModel);
    if (+(remoteUser as UserModel).admin === 1) {
      this.adminStatus$.next(true);
    } else {
      this.adminStatus$.next(false);
    }
    this.isLoggedIn$.next(true);
  }

  setUserToInactive() {
    this._user.next(null);
    this.adminStatus$.next(false);
    this.isLoggedIn$.next(false);
  }

  /*register(param: UserModel, password: string) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(param.email, password)
    ).pipe(
      tap(
        (response) => {
          this.save({...param, id: response.user.uid, admin: 0});
        }
      )
    );
  }*/

  /*save(param: UserModel) {
    return this.afDb.object(`users/${param.id}`).set(param)
      .then(
        user => user
      );
  }*/

  /*getUserById(fbid: string) {
     return this.afDb.object(`users/${fbid}`).valueChanges();
  }*/

  getCurrentUser() {
    return this._user.asObservable();
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.setUserToInactive();
    this._router.navigate(['/home']);
  }
}
