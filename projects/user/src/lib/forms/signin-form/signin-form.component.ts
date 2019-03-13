import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService } from '@jlguenego/angular-layout';

import { SuccessfullyConnectedPageComponent } from '../../pages/successfully-connected-page/successfully-connected-page.component';
import { UserService } from '../../user.service';
import { ERROR } from '../../error';
import { ForgottenPasswordPageComponent } from '../../pages/forgotten-password-page/forgotten-password-page.component';

@Component({
  selector: 'user-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  f = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ERROR = ERROR;
  errorCode: string;

  constructor(public user: UserService, private dialog: DialogService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errorCode = undefined;
    this.user.login(this.f.value).then(() => {
      this.dialog.open(SuccessfullyConnectedPageComponent);
    }).catch(error => {
      this.errorCode = error.code;
    });
  }

  forgotPassword() {
    this.dialog.open(ForgottenPasswordPageComponent);
  }

}
