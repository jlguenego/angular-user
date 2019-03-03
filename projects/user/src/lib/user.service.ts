import { Injectable } from '@angular/core';

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
    return Promise.resolve();
  }
  login(email: any, password: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
