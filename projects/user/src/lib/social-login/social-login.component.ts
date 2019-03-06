import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DialogService } from '@jlguenego/angular-layout';

@Component({
  selector: 'user-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  constructor(public user: UserService, private dialog: DialogService) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.user.loginWithFacebook().then(() => this.dialog.close());
  }
  loginWithGoogle() {
    this.user.loginWithGoogle().then(() => this.dialog.close());
  }

}
