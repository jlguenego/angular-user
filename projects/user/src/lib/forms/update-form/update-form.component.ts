import { Component, OnInit } from '@angular/core';
import { ERROR } from '../../error';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { DialogService, SuccessPageComponent } from '@jlguenego/angular-layout';
import { errFn } from '../../misc';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'user-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  errorCode: string;
  ERROR = ERROR;
  faUserCircle = faUserCircle;

  f = new FormGroup({
    displayName: new FormControl('', Validators.required),
    photoURL: new FormControl('')
  });

  constructor(
    private user: UserService,
    private dialog: DialogService) { }

  ngOnInit() {
    this.user.newsFeed.subscribe(user => {
      if (user.isLogged) {
        this.f.setValue({ displayName: user.userData.displayName, photoURL: user.userData.photoURL });
      }
    });
  }

  onSubmit() {
    this.user.update({
      displayName: this.f.value.displayName,
      photoURL: this.f.value.photoURL
    }).then(() => this.dialog.open(
      SuccessPageComponent,
      { title: 'Congratulations!', message: 'Update successfull!'})).catch(errFn);
  }

}
