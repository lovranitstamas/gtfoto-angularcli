import {Component} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../../shared/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: string;

  constructor(private _userService: UserService,
              private _router: Router) {
  }

  login(form) {
    this._userService.login(form.value).subscribe(
      (remoteUser: UserModel | number) => {
        if ((remoteUser as UserModel).id) {
          this._userService.setUserToActive((remoteUser as UserModel));
          this._router.navigate(['/user']);
        } else {
          switch (remoteUser) {
            case 422:
              this.error = 'E-mal cím és/vagy jelszó nem megfelelő.';
              break;
            case 400:
              this.error = 'Hiányos adatbevitel';
              break;
          }
        }
      });
  }

  clearError() {
    delete (this.error);
  }

}
