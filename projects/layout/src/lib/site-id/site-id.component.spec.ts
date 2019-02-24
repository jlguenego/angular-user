import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIdComponent } from './site-id.component';

describe('SiteIdComponent', () => {
  let component: SiteIdComponent;
  let fixture: ComponentFixture<SiteIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
