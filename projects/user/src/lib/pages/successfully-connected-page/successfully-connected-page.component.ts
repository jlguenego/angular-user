import { Component, OnInit } from '@angular/core';
import { DialogService } from '@jlguenego/angular-layout';

@Component({
  selector: 'user-successfully-connected-page',
  templateUrl: './successfully-connected-page.component.html',
  styleUrls: ['./successfully-connected-page.component.scss']
})
export class SuccessfullyConnectedPageComponent implements OnInit {

  title = 'You are logged in.';

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
