import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';
import {from, ReplaySubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn$ = new ReplaySubject<boolean>(1);
  adminStatus$ = new ReplaySubject<boolean>(1);
  private _user = new ReplaySubject<UserModel>(1);

  constructor(private _router: Router,
              private afAuth: AngularFireAuth,
              private afDb: AngularFireDatabase
  ) {
    this.afAuth.authState.subscribe(
      user => {
        if (user != null) {
          this.getUserById(user.uid).subscribe(
            (remoteUser: UserModel) => {
              this._user.next(remoteUser);
              this.adminStatus$.next(remoteUser.admin);
            }
          );
          this.isLoggedIn$.next(true);
        } else {
          this._user.next(null);
          this.isLoggedIn$.next(false);
          this.adminStatus$.next(false);
        }
      }
    );
    // subject - both part can send
    // in login no next, only subscriber, can not send
  }

  login(email: string, password: string) {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  register(param: UserModel, password: string) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(param.email, password)
    ).pipe(
      tap(
        (response) => {
          this.save({...param, id: response.user.uid, admin: false});
        }
      )
    );
  }

  save(param: UserModel) {
    return this.afDb.object(`users/${param.id}`).set(param)
      .then(
        user => user
      );
  }

  getUserById(fbid: string) {
    return this.afDb.object(`users/${fbid}`).valueChanges();
  }

  getCurrentUser() {
    return this._user.asObservable();
  }

  logout() {
    this.afAuth.auth.signOut();
    this._router.navigate(['/home']);
  }
}
