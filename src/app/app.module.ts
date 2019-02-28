import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'projects/layout/src/public_api';
import { UserModule } from 'projects/user/src/public_api';
import { ContactComponent } from './routes/contact/contact.component';
import { PresentationComponent } from './routes/presentation/presentation.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PresentationComponent,
    LegalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
