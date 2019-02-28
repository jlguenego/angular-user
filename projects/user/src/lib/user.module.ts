import { NgModule } from '@angular/core';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UtilitiesComponent, SigninPageComponent, SocialLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [UtilitiesComponent],
  entryComponents: [
    SigninPageComponent,
  ]
})
export class UserModule { }
