import { Component, OnInit } from '@angular/core';
import { ERROR } from '../../error';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { DialogService } from '@jlguenego/angular-layout';
import { PasswordChangedPageComponent } from '../../pages/password-changed-page/password-changed-page.component';
import { PasswordCheckService } from '@jlguenego/angular-layout';


@Component({
  selector: 'user-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.scss']
})
export class UpdatePasswordFormComponent implements OnInit {

  errorCode: string;
  ERROR = ERROR;

  f = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, this.check.validate()])
  });

  constructor(public user: UserService, private dialog: DialogService, private check: PasswordCheckService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.updatePassword(this.f.value.currentPassword, this.f.value.newPassword)
      .then(() => {
        this.dialog.open(PasswordChangedPageComponent);
      })
      .catch(err => this.errorCode = err.code);
  }

}
