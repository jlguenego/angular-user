import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  f = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  errorCode;

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errorCode = undefined;
    this.user.login(this.f.value.email, this.f.value.password).catch(errorCode => {
      this.errorCode = errorCode;
    });
  }

  forgotPassword() {
    console.log('forgot password ?');
  }

}
