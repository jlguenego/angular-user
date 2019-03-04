import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from '../widget/widget.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    WidgetModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    BodyComponent, 
    DialogComponent,
  ]
})
export class LayoutModule { }
