import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogComponent } from './dialog/dialog.component';
import { AnchorDirective } from './anchor.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DialogComponent,
    AnchorDirective,
    ClickStopPropagationDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    BodyComponent, 
    DialogComponent,
    ClickStopPropagationDirective
  ]
})
export class LayoutModule { }
