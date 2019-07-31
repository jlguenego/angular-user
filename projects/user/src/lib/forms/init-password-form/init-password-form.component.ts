import { Component, OnInit } from '@angular/core';
import { ERROR } from '../../error';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { DialogService, PasswordCheckService, ErrorPageComponent } from '@jlguenego/angular-layout';
import { PasswordChangedPageComponent } from '../../pages/password-changed-page/password-changed-page.component';

@Component({
  selector: 'user-init-password-form',
  templateUrl: './init-password-form.component.html',
  styleUrls: ['./init-password-form.component.scss']
})
export class InitPasswordFormComponent implements OnInit {

  errorCode: string;
  ERROR = ERROR;

  f = new FormGroup({
    newPassword: new FormControl('', [Validators.required, this.check.validate()])
  });

  constructor(public user: UserService, private dialog: DialogService, private check: PasswordCheckService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.initPassword(this.f.value.newPassword)
      .then(() => {
        this.dialog.open(PasswordChangedPageComponent);
      })
      .catch(err => this.dialog.open(ErrorPageComponent, {
        message: 'Please signout and signin again to initiate a new password.',
        explanation: 'For security reason, some operations need a recent authentification.'
      }));
  }

}
