import { Component, OnInit } from '@angular/core';
import { ERROR } from '../../error';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { DialogService, SuccessPageComponent } from '@jlguenego/angular-layout';

@Component({
  selector: 'user-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  errorCode: string;
  ERROR = ERROR;

  f = new FormGroup({
    displayName: new FormControl('', Validators.required),
  });

  constructor(
    private user: UserService,
    private dialog: DialogService) { }

  ngOnInit() {
    this.user.newsFeed.subscribe(user => {
      if (user.isLogged) {
        this.f.setValue({ displayName: user.userData.displayName });
      }
    });
  }

  onSubmit() {
    this.user.update(this.f.value.displayName).then(() => this.dialog.open(
      SuccessPageComponent, 
      { title: 'Congratulations!', message: 'Update successfull!'}));
  }

}
