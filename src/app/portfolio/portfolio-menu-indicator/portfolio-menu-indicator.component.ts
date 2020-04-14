import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-portfolio-menu-indicator',
  templateUrl: './portfolio-menu-indicator.component.html',
  styleUrls: ['./portfolio-menu-indicator.component.scss']
})
export class PortfolioMenuIndicatorComponent {
  @Input() title;
}
