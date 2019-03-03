import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreatedPageComponent } from './account-created-page.component';

describe('AccountCreatedPageComponent', () => {
  let component: AccountCreatedPageComponent;
  let fixture: ComponentFixture<AccountCreatedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreatedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
