import { TestBed } from '@angular/core/testing';

import { UserFirebaseBackOfficeService } from './user-firebase-back-office.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

describe('UserFirebaseBackOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp({
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
      }),
      AngularFireAuthModule,
    ],
    providers: [UserFirebaseBackOfficeService]
  }));

  it('should be created', () => {
    const service: UserFirebaseBackOfficeService = TestBed.get(UserFirebaseBackOfficeService);
    expect(service).toBeTruthy();
  });
});
