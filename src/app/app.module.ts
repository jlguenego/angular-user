import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@jlguenego/angular-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserModule } from '@jlguenego/angular-user';
import { UserBackOfficeService } from '@jlguenego/angular-user';
import { UserFirebaseBackOfficeService } from '@jlguenego/angular-user-firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './routes/contact/contact.component';
import { PresentationComponent } from './routes/presentation/presentation.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
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
    BrowserModule.withServerTransition({ appId: 'put-what-you-want-here' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    LayoutModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: UserBackOfficeService, useClass: UserFirebaseBackOfficeService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
