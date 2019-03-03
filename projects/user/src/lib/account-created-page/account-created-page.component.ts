import { Component, OnInit } from '@angular/core';
import { DialogService } from 'projects/layout/src/lib/dialog.service';

@Component({
  selector: 'user-account-created-page',
  templateUrl: './account-created-page.component.html',
  styleUrls: ['./account-created-page.component.scss']
})
export class AccountCreatedPageComponent implements OnInit {

  title = "Congratulations!"

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
