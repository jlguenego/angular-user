import { Component, OnInit, Input, Inject } from '@angular/core';
import { LayoutConfigService } from '../layout-config.service';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: NavItem[] = [];

  constructor(public config: LayoutConfigService) { }

  ngOnInit() { }

}
