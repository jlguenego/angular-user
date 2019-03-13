import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPasswordFormComponent } from './init-password-form.component';

describe('InitPasswordFormComponent', () => {
  let component: InitPasswordFormComponent;
  let fixture: ComponentFixture<InitPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitPasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
