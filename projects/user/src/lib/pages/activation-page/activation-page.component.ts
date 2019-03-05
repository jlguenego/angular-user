import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-activation-page',
  templateUrl: './activation-page.component.html',
  styleUrls: ['./activation-page.component.scss']
})
export class ActivationPageComponent implements OnInit {
  title = "Activate your account";
  constructor() { }

  ngOnInit() {
  }

}
