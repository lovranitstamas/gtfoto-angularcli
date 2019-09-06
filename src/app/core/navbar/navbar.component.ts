import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public isCollapsed = true;
  isLoggedIn = false;
  items = [
    {
      name: 'Képgaléria',
      mainMenu: 'portfolio',
      subMenu: 'photogallery'
    },
    {
      name: 'Jegyesfotók',
      mainMenu: 'portfolio',
      subMenu: 'engaged'
    },
    {
      name: 'Teszt',
      mainMenu: 'portfolio',
      subMenu: 'test'
    }
    // 'Portré',
    // 'Család',
    // 'Rendezvény',
    // 'Tájak, városok'
  ];
  private _routerSub = Subscription.EMPTY;
  private _routerSubEnd = Subscription.EMPTY;

  constructor(public userService: UserService, private _router: Router) {
    this.userService.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  ngOnInit() {
    this._routerSub = this._router.events.pipe(
      filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.isCollapsed = true;
      });

    this._routerSubEnd = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy() {
    this._routerSub.unsubscribe();
    this._routerSubEnd.unsubscribe();
  }

  clickOnRouterLink() {
    this.isCollapsed = true;
    window.scrollTo(0, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const target = event.target;
    if (target.innerWidth > 576) {
      this.isCollapsed = true;
    }
  }

  onHidden(): void {
    // console.log('Dropdown is hidden');
  }

  onShown(): void {
    // console.log('Dropdown is shown');
  }

  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  logout() {
    this.userService.logout();
  }

}
