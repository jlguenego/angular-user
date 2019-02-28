import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  title = "Sign in";

  constructor() { }

  ngOnInit() {
  }

}
