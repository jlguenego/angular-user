import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@jlguenego/angular-layout';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit, PageComponent {

  title = 'Sign up';
  maxWidth = '20rem';

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
