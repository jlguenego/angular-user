import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationPageComponent } from './activation-page.component';
import { UserService, UserData } from '../../user.service';
import { Injectable } from '@angular/core';

@Injectable()
class MyUserService extends UserService {
  userData: UserData = {
    displayName: 'Jean-Louis GUENEGO',
    email: 'jlguenego@gmail.com',
    isVerified: false,
  };
}

describe('ActivationPageComponent', () => {
  let component: ActivationPageComponent;
  let fixture: ComponentFixture<ActivationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationPageComponent ],
      providers: [{provide: UserService, useValue: MyUserService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
