import { TestBed } from '@angular/core/testing';

import { UserBackOfficeService } from './user-back-office.service';

describe('UserBackOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBackOfficeService = TestBed.get(UserBackOfficeService);
    expect(service).toBeTruthy();
  });
});
