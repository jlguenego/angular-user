import { Component, OnInit } from '@angular/core';
import { DialogService } from 'projects/layout/src/lib/dialog.service';
import { SigninPageComponent } from '../signin-page/signin-page.component';
import { ResponsiveService } from 'projects/layout/src/lib/responsive.service';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

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
  }

  profile() {
    this.router.navigate(['/user/my-profile']);
  }

}
