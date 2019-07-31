import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
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
