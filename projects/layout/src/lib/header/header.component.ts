import { Component, OnInit, Input } from '@angular/core';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: NavItem[] = [];

  constructor() { }

  ngOnInit() { }

}
