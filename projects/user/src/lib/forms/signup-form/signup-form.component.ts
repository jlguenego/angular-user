import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, SignupFormData } from '../../user.service';
import { AccountCreatedPageComponent } from '../../pages/account-created-page/account-created-page.component';
import { ERROR } from '../../error';
import { DialogService, PasswordCheckService } from 'projects/layout/src/public_api';

@Component({
  selector: 'user-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  ERROR = ERROR;
  errorCode: string;

  f = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    displayName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, this.passwordCheck.validate()]),
  });

  constructor(
    private user: UserService,
    private dialog: DialogService,
    private passwordCheck: PasswordCheckService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errorCode = undefined;

    this.user.createAccount(<SignupFormData>this.f.value).then(() => {
      this.dialog.open(AccountCreatedPageComponent);
    }).catch(
      errorCode => {
        this.errorCode = errorCode;
      });
  }

}
