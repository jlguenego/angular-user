import { NgModule } from '@angular/core';
import { PasswordComponent } from './password/password.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { DividerComponent } from './divider/divider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordCheckComponent,
    DividerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PasswordComponent,
    DividerComponent
  ]
})
export class WidgetModule { }
