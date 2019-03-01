import { Component, Input } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AbstractValueAccessor, MakeProvider } from '../AbstractValueAccessor';

@Component({
  selector: 'widget-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [MakeProvider(PasswordComponent)],
})
export class PasswordComponent extends AbstractValueAccessor {

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  isVisible = false;
  isNewPassword = false;
  havingFocus = false;

  @Input('appPasswordNew') set appPasswordNew(val: any) {
    this.isNewPassword = true;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  onFocus() {
    this.havingFocus = true;
  }
  onBlur() {
    this.havingFocus = false;
    this.onTouched();
  }

}
