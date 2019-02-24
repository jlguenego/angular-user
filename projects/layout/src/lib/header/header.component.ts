import { Component, OnInit, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { SiteIdComponent } from '../site-id/site-id.component';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: NavItem[] = [];

  constructor() { }

  ngOnInit() { }

}
