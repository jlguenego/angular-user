import { TestBed } from '@angular/core/testing';

import { UserFirebaseBackOfficeService } from './user-firebase-back-office.service';

describe('UserFirebaseBackOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFirebaseBackOfficeService = TestBed.get(UserFirebaseBackOfficeService);
    expect(service).toBeTruthy();
  });
});
