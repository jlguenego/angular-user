import { NgModule } from '@angular/core';
import { UtilitiesComponent } from './utilities/utilities.component';
import { MobileUtilitiesComponent } from './mobile-utilities/mobile-utilities.component';

@NgModule({
  declarations: [UtilitiesComponent, MobileUtilitiesComponent],
  imports: [
  ],
  exports: [UtilitiesComponent, MobileUtilitiesComponent]
})
export class UserModule { }
