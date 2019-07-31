import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../../dialog.service';

@Component({
  selector: 'layout-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, PageComponent {
  title = 'Error';
  data = {
    message: 'I need a message...',
    explanation: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
