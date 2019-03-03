import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'widget-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Output() open = new EventEmitter();

  @Input() label: string;
  isOpen = false;
  faCaret = this.isOpen ? faCaretUp : faCaretDown;

  constructor() { }

  ngOnInit() {
  }

  openPopup() {
    this.isOpen = true;
    this.faCaret = faCaretUp;
    this.open.emit();
  }

  closePopup() {
    this.isOpen = false;
    this.faCaret = faCaretDown;
  }

}