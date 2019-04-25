import {Component, HostListener} from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: CarouselConfig, useValue: {interval: 5000, noPause: true, showIndicators: true}}
  ]
})
export class AppComponent {
  title = 'gtfoto-angular';
  public isCollapsed = true;

  items: string[] = [
    'Esküvő',
    'Portré',
    'Család',
    'Rendezvény',
    'Tájak, városok'
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
}
