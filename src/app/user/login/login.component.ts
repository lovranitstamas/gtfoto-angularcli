import {Component, HostListener} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../../shared/user-model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function emailValidator(control: FormControl): { [s: string]: boolean } {
  // tslint:disable-next-line:max-line-length
  if (!control.value.match(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm)
  ) {
    return {invalidEmail: true};
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginAuthInfo: boolean;
  onProcess = false;
  loginForm: FormGroup;
  loginPassword: any;

  @HostListener('input')
  oninput() {
    this.onProcess = false;
  }

  constructor(private _userService: UserService,
              private _router: Router,
              fb: FormBuilder) {
    this.loginForm = fb.group({
      loginEmail: ['', Validators.compose([Validators.required, emailValidator])],
      loginPassword: ['', Validators.required]
    });

    this.loginPassword = this.loginForm.controls['loginPassword'];
  }

  login(form) {
    this.onProcess = true;
    this.loginAuthInfo = false;

    if (form.valid) {
      this._userService.login(form.value).subscribe(
        (response) => {
          if (response.statusCode === 200) {
            this._userService.setUserToActive((response.user as UserModel));
            this._router.navigate(['/user']);
          }
          if (response.statusCode === 204) {
            this.loginAuthInfo = true;
            console.log(response.statusCode);
          }
        });
    }
  }

  closeAlert() {
    this.onProcess = false;
    this.loginAuthInfo = false;
  }
}
