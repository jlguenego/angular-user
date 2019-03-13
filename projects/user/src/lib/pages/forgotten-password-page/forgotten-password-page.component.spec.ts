import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenPasswordPageComponent } from './forgotten-password-page.component';

describe('ForgottenPasswordPageComponent', () => {
  let component: ForgottenPasswordPageComponent;
  let fixture: ComponentFixture<ForgottenPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenPasswordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
