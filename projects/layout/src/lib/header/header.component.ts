import { Component, OnInit, Input, Inject } from '@angular/core';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: NavItem[] = [
    { label: 'Menu1', route: '/menu1' },
    { label: 'Menu2', route: '/menu2' },
  ];

  constructor() { }

  ngOnInit() { }

}
