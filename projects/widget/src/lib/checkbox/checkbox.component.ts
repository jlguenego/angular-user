import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public checked = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
  }

}
