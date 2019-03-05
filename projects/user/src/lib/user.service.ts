import { Injectable } from '@angular/core';
import { UserBackOfficeService } from './user-back-office.service';

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
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData;
  isLogged: boolean = undefined;
  needsActivation = this.bo.sendMailOnCreate;

  constructor(private bo: UserBackOfficeService) {
    this.refresh();
    this.bo.register(this);
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
    // here you create the account
    const key = this.getKey(formData.email);
    return this.bo.createAccount(formData).then(userData => {
      localStorage.setItem('isLogged', key);
      localStorage.setItem(key, JSON.stringify(userData));
      this.sync();
    }).catch(err => {
      localStorage.removeItem('isLogged');
      localStorage.removeItem(key);
      this.sync();
      return Promise.reject(err);
    });
  }

  login(formData: SigninFormData): Promise<void> {
    const key = this.getKey(formData.email);
    return this.bo.login(formData).then(userData => {
      localStorage.setItem('isLogged', key);
      localStorage.setItem(key, JSON.stringify(userData));
      this.sync();
    }).catch(err => {
      console.log('user login', err);
      localStorage.removeItem('isLogged');
      localStorage.removeItem(key);
      this.sync();
      return Promise.reject(err);
    });
  }

  logout() {
    this.bo.logout();
    localStorage.removeItem('isLogged');
    this.sync();
  }

  getKey(email: string) {
    return `user:${email}`;
  }

  delete(): Promise<void> {
    const key = this.getKey(this.userData.email);
    return this.bo.delete().then(() => {
      localStorage.removeItem(key);
      localStorage.removeItem('isLogged');
      this.sync();
    });
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
