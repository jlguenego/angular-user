import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { ResponsiveService, DialogService } from '@jlguenego/angular-layout';
import { UserService } from '../user.service';

import { SigninPageComponent } from '../pages/signin-page/signin-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';

@Component({
  selector: 'user-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

  faUserCircle = faUserCircle;

  constructor(
    private dialog: DialogService,
    public resp: ResponsiveService,
    public user: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  signinDialog() {
    this.dialog.open(SigninPageComponent);
  }

  signupDialog() {
    this.dialog.open(SignupPageComponent);
  }

  signout() {
    this.user.logout();
    this.router.navigate(['/']);
  }

  profile() {
    console.log('profilex');
    this.router.navigate(['/my-profile']);
  }

}
