import { Component } from '@angular/core';
import { ResponsiveService, NavItem } from 'projects/layout/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public responsive: ResponsiveService) {
  }

  nav: NavItem[] = [
    { label: 'Brainstorm', route: '/brainstorm' },
    { label: 'Presentation', route: '/presentation' },
    { label: 'Contact', route: '/contact' },
  ];
}
