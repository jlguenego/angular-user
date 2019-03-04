import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetModule, LayoutModule } from '@jlguenego/angular-layout';
import { UtilitiesComponent } from './utilities/utilities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountCreatedPageComponent } from './pages/account-created-page/account-created-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SuccessfullyConnectedPageComponent } from './pages/successfully-connected-page/successfully-connected-page.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileMenuIconComponent } from './mobile-menu-icon/mobile-menu-icon.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { SucessfullyDeletedComponent } from './routes/sucessfully-deleted/sucessfully-deleted.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    MobileMenuIconComponent,
    UtilitiesComponent,
    SocialLoginComponent,
    AccountCreatedPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SuccessfullyConnectedPageComponent,
    SigninFormComponent,
    SignupFormComponent,
    UpdateFormComponent,
    ProfileComponent,
    SucessfullyDeletedComponent
    

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    WidgetModule,
    LayoutModule,
    UserRoutingModule,
  ],
  exports: [
    MobileMenuIconComponent,
    UtilitiesComponent,
  ],
  entryComponents: [
    AccountCreatedPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SuccessfullyConnectedPageComponent,
  ]
})
export class UserModule { }
