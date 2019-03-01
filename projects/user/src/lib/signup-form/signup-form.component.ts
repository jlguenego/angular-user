import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordCheckService } from 'projects/widget/src/lib/password-check.service';
import { UserService } from '../user.service';

@Component({
  selector: 'user-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  errorCode: string;

  f = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordCheck.validate()]),
  });

  constructor(
    private user: UserService,
    private passwordCheck: PasswordCheckService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errorCode = undefined;

    this.user.createAccount(this.f.value).catch(
      errorCode => {
        this.errorCode = errorCode;
      });
  }

}
