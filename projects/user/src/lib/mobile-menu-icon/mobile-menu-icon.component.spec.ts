import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuIconComponent } from './mobile-menu-icon.component';

describe('MobileMenuIconComponent', () => {
  let component: MobileMenuIconComponent;
  let fixture: ComponentFixture<MobileMenuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
