import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullyDeletedComponent } from './sucessfully-deleted.component';

describe('SucessfullyDeletedComponent', () => {
  let component: SucessfullyDeletedComponent;
  let fixture: ComponentFixture<SucessfullyDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfullyDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfullyDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
