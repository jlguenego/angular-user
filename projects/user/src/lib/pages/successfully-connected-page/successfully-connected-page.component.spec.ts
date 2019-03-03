import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyConnectedPageComponent } from './successfully-connected-page.component';

describe('SuccessfullyConnectedPageComponent', () => {
  let component: SuccessfullyConnectedPageComponent;
  let fixture: ComponentFixture<SuccessfullyConnectedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullyConnectedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyConnectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
