import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [HeaderComponent, FooterComponent, BodyComponent, DialogComponent]
})
export class LayoutModule { }
