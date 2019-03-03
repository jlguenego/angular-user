import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'user-mobile-menu-icon',
  templateUrl: './mobile-menu-icon.component.html',
  styleUrls: ['./mobile-menu-icon.component.scss']
})
export class MobileMenuIconComponent implements OnInit {

  faBars = faBars;
  faUser = faUser;

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
