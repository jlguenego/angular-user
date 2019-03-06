import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@jlguenego/angular-layout';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit, PageComponent {

  title = "Sign in";
  maxWidth = '20rem';

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
