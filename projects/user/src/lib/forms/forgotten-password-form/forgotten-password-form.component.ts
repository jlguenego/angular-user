import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DialogService, SuccessPageComponent } from '@jlguenego/angular-layout';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-forgotten-password-form',
  templateUrl: './forgotten-password-form.component.html',
  styleUrls: ['./forgotten-password-form.component.scss']
})
export class ForgottenPasswordFormComponent implements OnInit {

  f = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private dialog: DialogService, private user: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.sendResetPasswordEmail(this.f.value.email)
      .then(() => {
        this.dialog.open(SuccessPageComponent, {
          title: 'Mail successfully sent!',
          message: 'Please open your email messagerie.'
        });
      });
  }

}
