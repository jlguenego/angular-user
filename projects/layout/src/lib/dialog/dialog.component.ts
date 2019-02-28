import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'layout-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  isVisible = false;

  title = "Error: I need a title";

  faTimes = faTimes;

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
