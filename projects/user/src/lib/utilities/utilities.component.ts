import { Component, OnInit } from '@angular/core';
import { DialogService } from 'projects/layout/src/lib/dialog.service';
import { SigninPageComponent } from '../signin-page/signin-page.component';

@Component({
  selector: 'user-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  signinDialog() {
    console.log('signin');
    this.dialog.open(SigninPageComponent);
  }

}
