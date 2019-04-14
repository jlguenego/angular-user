import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenPasswordPageComponent } from './forgotten-password-page.component';
import { ForgottenPasswordFormComponent } from '../../forms/forgotten-password-form/forgotten-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForgottenPasswordPageComponent', () => {
  let component: ForgottenPasswordPageComponent;
  let fixture: ComponentFixture<ForgottenPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenPasswordPageComponent, ForgottenPasswordFormComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule]
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
