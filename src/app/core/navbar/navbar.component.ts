import {Component, HostListener} from '@angular/core';
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isCollapsed = true;

  constructor(public userService: UserService) {
  }

  items = [
    {
      name: 'Képgaléria',
      mainMenu: 'portfolio',
      subMenu: 'photogallery',
      function: 'pictures'
    },
    {
      name: 'Jegyesfotók',
      mainMenu: 'portfolio',
      subMenu: 'engaged',
      function: 'list'
    },
    {
      name: 'Teszt',
      mainMenu: 'portfolio',
      subMenu: 'test',
      function: 'list'
    }
    // 'Portré',
    // 'Család',
    // 'Rendezvény',
    // 'Tájak, városok'
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const target = event.target;
    if (target.innerWidth > 576) {
      this.isCollapsed = true;
    }
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }

  onShown(): void {
    console.log('Dropdown is shown');
  }

  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  logout() {
    this.userService.logout();
  }

}
