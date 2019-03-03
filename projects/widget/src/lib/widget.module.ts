import { NgModule } from '@angular/core';
import { PasswordComponent } from './password/password.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { DividerComponent } from './divider/divider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordCheckComponent,
    DividerComponent,
    CheckboxComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PasswordComponent,
    DividerComponent,
    CheckboxComponent,
    PopupComponent
  ]
})
export class WidgetModule { }
