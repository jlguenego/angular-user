import { Injectable } from '@angular/core';
import { ERROR } from './error';

export interface SignupFormData {
  email: string;
  displayName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createAccount(userData: SignupFormData): any {
    console.log('about to create account', userData);
    // here you create the account
    const key = `user:${userData.email}`;
    if (localStorage.getItem(key)) {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    }
    localStorage.setItem(key, JSON.stringify(userData));
    return Promise.resolve();
  }

  login(email: any, password: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
