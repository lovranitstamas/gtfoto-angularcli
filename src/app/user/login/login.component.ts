import {Component} from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _userService: UserService) {
  }

  login(email: string, password: string) {
    this._userService.login(email, password);
  }
}
