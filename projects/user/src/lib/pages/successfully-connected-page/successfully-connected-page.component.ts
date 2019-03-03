import { Component, OnInit } from '@angular/core';
import { DialogService } from 'projects/layout/src/lib/dialog.service';

@Component({
  selector: 'user-successfully-connected-page',
  templateUrl: './successfully-connected-page.component.html',
  styleUrls: ['./successfully-connected-page.component.scss']
})
export class SuccessfullyConnectedPageComponent implements OnInit {

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
