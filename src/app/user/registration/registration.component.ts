import {Component} from '@angular/core';
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private _userService: UserService) { }


  register() {
    //this._userService.register();
  }
}
