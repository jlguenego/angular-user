import { NgModule } from '@angular/core';
import { PasswordComponent } from './password/password.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordCheckComponent,
    DividerComponent
  ],
  imports: [
  ],
  exports: [
    PasswordComponent,
    DividerComponent
  ]
})
export class WidgetModule { }
