import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPageComponent } from './signin-page.component';
import { SocialLoginComponent } from '../../social-login/social-login.component';
import { WidgetModule } from '@jlguenego/angular-layout';
import { SigninFormComponent } from '../../forms/signin-form/signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SigninPageComponent', () => {
  let component: SigninPageComponent;
  let fixture: ComponentFixture<SigninPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPageComponent, SocialLoginComponent, SigninFormComponent ],
      imports: [WidgetModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
