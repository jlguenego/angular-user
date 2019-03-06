import { Component, OnInit } from '@angular/core';
import { DialogService, PageComponent } from '../../../dialog.service';

@Component({
  selector: 'layout-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit, PageComponent {
  title: string = "Congratulations!";
  data: { message: 'I need a message...' };


  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
