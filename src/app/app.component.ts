import { Component } from '@angular/core';
import { ResponsiveService, NavItem, LayoutConfigService } from 'projects/layout/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public responsive: ResponsiveService, private layoutConfig: LayoutConfigService) {

    this.layoutConfig.hue = 303;
  }
  
  nav: NavItem[] = [
    {label: 'Brainstorm', route: '/brainstorm'},
    {label: 'Presentation', route: '/presentation'},
    {label: 'Contact', route: '/contact'},
  ];
}
