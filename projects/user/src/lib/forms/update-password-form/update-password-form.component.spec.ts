import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordFormComponent } from './update-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '@jlguenego/angular-layout';

describe('UpdatePasswordFormComponent', () => {
  let component: UpdatePasswordFormComponent;
  let fixture: ComponentFixture<UpdatePasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePasswordFormComponent],
      imports: [ReactiveFormsModule, WidgetModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
