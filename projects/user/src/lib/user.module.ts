import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { CommonModule } from '@angular/common';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { WidgetModule } from 'projects/widget/src/public_api';

@NgModule({
  declarations: [UtilitiesComponent, SigninPageComponent, SocialLoginComponent, SigninFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetModule,
  ],
  exports: [UtilitiesComponent],
  entryComponents: [
    SigninPageComponent,
  ]
})
export class UserModule { }
