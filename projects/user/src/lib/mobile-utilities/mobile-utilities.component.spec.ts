import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUtilitiesComponent } from './mobile-utilities.component';

describe('MobileUtilitiesComponent', () => {
  let component: MobileUtilitiesComponent;
  let fixture: ComponentFixture<MobileUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
