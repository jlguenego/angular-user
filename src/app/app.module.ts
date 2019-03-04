import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@jlguenego/angular-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserModule } from 'projects/user/src/public_api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './routes/contact/contact.component';
import { PresentationComponent } from './routes/presentation/presentation.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { UserBackOfficeService } from 'projects/user/src/lib/user-back-office.service';
import { UserFirebaseBackOfficeService } from 'projects/firebase/src/public_api';
import { environment } from 'src/environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    LayoutModule,
    UserModule,
  ],
  providers: [{
    provide: UserBackOfficeService, useClass: UserFirebaseBackOfficeService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
