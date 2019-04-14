import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFormComponent } from './signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '@jlguenego/angular-layout';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFormComponent ],
      imports: [ReactiveFormsModule, WidgetModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
