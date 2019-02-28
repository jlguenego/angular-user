import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;

  @Input() navItems: NavItem[] = [
    { label: 'Menu1', route: '/menu1' },
    { label: 'Menu2', route: '/menu2' },
  ];

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() { }

}
