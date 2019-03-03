import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { DialogService } from 'projects/layout/src/lib/dialog.service';
import { SuccessfullyConnectedPageComponent } from '../../successfully-connected-page/successfully-connected-page.component';

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
  errorCode;

  constructor(private user: UserService, private dialog: DialogService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errorCode = undefined;
    this.user.login(this.f.value).then(userData => {
      this.dialog.open(SuccessfullyConnectedPageComponent);
    }).catch(errorCode => {
      this.errorCode = errorCode;
    });
  }

  forgotPassword() {
    console.log('forgot password ?');
  }

}
