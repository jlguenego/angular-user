import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangedPageComponent } from './password-changed-page.component';

describe('PasswordChangedPageComponent', () => {
  let component: PasswordChangedPageComponent;
  let fixture: ComponentFixture<PasswordChangedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordChangedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
