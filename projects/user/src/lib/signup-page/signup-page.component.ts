import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'projects/layout/src/lib/dialog.service';

@Component({
  selector: 'user-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit, PageComponent {

  title = "Sign up";

  constructor() { }

  ngOnInit() {
  }

}
