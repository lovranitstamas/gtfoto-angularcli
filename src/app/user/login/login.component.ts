import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error: string;

  constructor(private _userService: UserService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this._userService.login(email, password).subscribe(
      () => {
        this._router.navigate(['/user']);
      },
      () => {
        this.error = 'Hiba a belépésnél. E-mal cím és/vagy jelszó nem megfelelő.';
      });
  }

  clearError() {
    delete (this.error);
  }
}
