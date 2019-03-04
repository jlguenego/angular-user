import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PasswordComponent } from './password/password.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { DividerComponent } from './divider/divider.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopupComponent } from './popup/popup.component';
import { AnchorDirective } from './anchor.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordCheckComponent,
    DividerComponent,
    CheckboxComponent,
    PopupComponent,
    AnchorDirective,
    ClickStopPropagationDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PasswordComponent,
    DividerComponent,
    CheckboxComponent,
    PopupComponent,
    AnchorDirective,
    ClickStopPropagationDirective,
  ]
})
export class WidgetModule { }
