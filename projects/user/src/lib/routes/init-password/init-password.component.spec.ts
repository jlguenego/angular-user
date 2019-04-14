import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPasswordComponent } from './init-password.component';
import { InitPasswordFormComponent } from '../../forms/init-password-form/init-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '@jlguenego/angular-layout';

describe('InitPasswordComponent', () => {
  let component: InitPasswordComponent;
  let fixture: ComponentFixture<InitPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitPasswordComponent, InitPasswordFormComponent ],
      imports: [ReactiveFormsModule, WidgetModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
