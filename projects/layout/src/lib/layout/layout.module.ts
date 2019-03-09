import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from '../widget/widget.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DialogComponent } from './dialog/dialog.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DialogComponent,
    ErrorPageComponent,
    SuccessPageComponent,
    NotFoundComponent,
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
  ],
  entryComponents: [
    ErrorPageComponent,
    SuccessPageComponent,
  ]
})
export class LayoutModule { }
