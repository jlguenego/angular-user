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
    this.isConnected().catch(() => { });
  }

  isConnected(): Promise<void> {
    this.sync();
    if (this.isLogged !== undefined) {
      if (this.isLogged) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    }
  }

  createAccount(formData: SignupFormData): Promise<void> {
    console.log('about to create account', formData);
    this.isLogged = false;
    this.userData = undefined;
    // here you create the account
    const key = this.getKey(formData);
    if (localStorage.getItem(key)) {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    }
    localStorage.setItem('isLogged', key);
    localStorage.setItem(key, JSON.stringify(formData));
    this.sync();
    return Promise.resolve();
  }

  login(formData: SigninFormData): any {
    console.log('about to login', formData);

    const key = this.getKey(formData);
    const json = localStorage.getItem(key);
    if (!json) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    const userData = <UserData>JSON.parse(json);
    if (userData.password !== formData.password) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    localStorage.setItem('isLogged', key);
    this.sync();
    return Promise.resolve(userData);
  }

  logout() {
    this.isLogged = false;
    this.userData = undefined;
    localStorage.removeItem('isLogged');
  }

  getKey(userData) {
    return `user:${userData.email}`;
  }

  delete(): Promise<void> {
    const key = this.getKey(this.userData);
    localStorage.removeItem(key);
    localStorage.removeItem('isLogged');
    this.sync();
    return Promise.resolve();
  }

  sync() {
    const isLogged = localStorage.getItem('isLogged');
    if (!isLogged) {
      localStorage.removeItem('isLogged');
      this.isLogged = false;
      this.userData = undefined;
      return;
    }
    try {
      const key = isLogged;
      const data = localStorage.getItem(key);
      if (data === undefined) {
        throw 'no data';
      }
      this.userData = JSON.parse(data);
      this.isLogged = true;
    } catch (error) {
      this.isLogged = false;
      this.userData = undefined;
    }

  }

}
