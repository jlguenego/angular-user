import { Component, OnInit } from '@angular/core';
import { DialogService } from '@jlguenego/angular-layout';

@Component({
  selector: 'user-forgotten-password-page',
  templateUrl: './forgotten-password-page.component.html',
  styleUrls: ['./forgotten-password-page.component.scss']
})
export class ForgottenPasswordPageComponent implements OnInit {

  title = 'Forgotten password';

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
