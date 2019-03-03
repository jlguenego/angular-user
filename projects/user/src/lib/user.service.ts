import { Injectable } from '@angular/core';
import { ERROR } from './error';

export interface SignupFormData {
  email: string;
  displayName: string;
  password: string;
}

export interface SigninFormData {
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  password: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData;
  isLogged: boolean = undefined;

  constructor() {
    this.refresh();
  }

  refresh() {
    this.isConnected();
  }

  isConnected(): Promise<void> {
    if (this.isLogged !== undefined) {
      if (this.isLogged) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    }
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === undefined) {
      this.isLogged = false;
      this.userData = undefined;
      return Promise.reject();
    }
    const email = isLogged;
    const key = `user:${email}`;
    const userData = localStorage.getItem(key);
    if (userData) {
      this.userData = JSON.parse(userData);
      this.isLogged = true;
    }
  }

  createAccount(formData: SignupFormData): Promise<void> {
    console.log('about to create account', formData);
    this.isLogged = false;
    this.userData = undefined;
    // here you create the account
    const key = `user:${formData.email}`;
    if (localStorage.getItem(key)) {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    }
    localStorage.setItem(key, JSON.stringify(formData));
    localStorage.setItem('isLogged', formData.email);
    this.isLogged = true;
    this.userData = formData;
    return Promise.resolve();
  }

  login(formData: SigninFormData): any {
    console.log('about to login', formData);
    this.isLogged = false;
    this.userData = undefined;
    const key = `user:${formData.email}`;
    const json = localStorage.getItem(key);
    if (!json) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    const userData = <UserData>JSON.parse(json);
    if (userData.password !== formData.password) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    localStorage.setItem('isLogged', formData.email);
    this.isLogged = true;
    this.userData = userData;
    return Promise.resolve(userData);
  }

  logout() {
    this.isLogged = false;
    this.userData = undefined;
  }

}
