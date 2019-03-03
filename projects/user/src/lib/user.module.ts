import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UtilitiesComponent } from './utilities/utilities.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { WidgetModule } from 'projects/widget/src/public_api';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { AccountCreatedPageComponent } from './account-created-page/account-created-page.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';

@NgModule({
  declarations: [
    UtilitiesComponent,
    SigninPageComponent,
    SocialLoginComponent,
    SigninFormComponent,
    SignupPageComponent,
    SignupFormComponent,
    AccountCreatedPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    WidgetModule,
  ],
  exports: [UtilitiesComponent],
  entryComponents: [
    SigninPageComponent,
    SignupPageComponent,
    AccountCreatedPageComponent,
  ]
})
export class UserModule { }
