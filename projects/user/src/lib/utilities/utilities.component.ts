import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { ResponsiveService, DialogService } from '@jlguenego/angular-layout';
import { UserService } from '../user.service';

import { SigninPageComponent } from '../pages/signin-page/signin-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { ActivationPageComponent } from '../pages/activation-page/activation-page.component';
import { errFn } from 'projects/misc/misc';

@Component({
  selector: 'user-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  host: {
    // when the browser user comes back to this browser window tab, it will run refresh().
    // this is needed for instance while checking user activation (mail verified)
    '(window:focus)': 'refresh($event)',
  }
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

  activationDialog() {
    this.dialog.open(ActivationPageComponent)
  }

  signout() {
    this.user.logout().catch(errFn);
  }

  refresh(event) {
    this.user.refresh();
  }

}
