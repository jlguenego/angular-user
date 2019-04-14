import { AnchorDirective } from './anchor.directive';
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<p>Test</p>`,
})
class TestComponent { }

describe('AnchorDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AnchorDirective]
    }).compileComponents();
  }));

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
