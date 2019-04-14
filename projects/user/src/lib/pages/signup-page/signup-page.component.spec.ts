import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageComponent } from './signup-page.component';
import { SocialLoginComponent } from '../../social-login/social-login.component';
import { WidgetModule } from '@jlguenego/angular-layout';
import { SignupFormComponent } from '../../forms/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPageComponent, SocialLoginComponent, SignupFormComponent ],
      imports: [WidgetModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
