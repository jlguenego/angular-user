import { NgModule } from '@angular/core';
import { UtilitiesComponent } from './utilities/utilities.component';
import { MobileUtilitiesComponent } from './mobile-utilities/mobile-utilities.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

@NgModule({
  declarations: [UtilitiesComponent, MobileUtilitiesComponent, SigninPageComponent],
  imports: [
  ],
  exports: [UtilitiesComponent, MobileUtilitiesComponent],
  entryComponents: [
    SigninPageComponent,
  ]
})
export class UserModule { }
