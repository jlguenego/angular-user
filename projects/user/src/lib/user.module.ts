import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from './user-routing.module';

import { UtilitiesComponent } from './utilities/utilities.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { AccountCreatedPageComponent } from './pages/account-created-page/account-created-page.component';
import { SuccessfullyConnectedPageComponent } from './pages/successfully-connected-page/successfully-connected-page.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { MobileMenuIconComponent } from './mobile-menu-icon/mobile-menu-icon.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { SucessfullyDeletedComponent } from './routes/sucessfully-deleted/sucessfully-deleted.component';
import { WidgetModule } from 'projects/layout/src/lib/widget/widget.module';

@NgModule({
  declarations: [
    UtilitiesComponent,
    SigninPageComponent,
    SocialLoginComponent,
    SigninFormComponent,
    SignupPageComponent,
    SignupFormComponent,
    AccountCreatedPageComponent,
    SuccessfullyConnectedPageComponent,
    MobileMenuIconComponent,
    ProfileComponent,
    UpdateFormComponent,
    SucessfullyDeletedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    WidgetModule,
    UserRoutingModule,
  ],
  exports: [
    UtilitiesComponent,
    MobileMenuIconComponent,
  ],
  entryComponents: [
    SigninPageComponent,
    SignupPageComponent,
    AccountCreatedPageComponent,
    SuccessfullyConnectedPageComponent,
  ]
})
export class UserModule { }
