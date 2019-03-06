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
  isVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData;
  isLogged: boolean = undefined;
  needsActivation = this.bo.needsActivation;


  constructor(private bo: UserBackOfficeService) {
    this.refresh();
    this.bo.register(this);
  }

  refresh() {
    this.isConnected().catch(() => { });
  }

  isConnected(): Promise<void> {
    return this.bo.refresh().then(userData => {
      this.connect(userData);
      return Promise.resolve();
    }).catch(err => {
      this.disconnect();
      return Promise.reject();
    });
  }

  connect(userData: UserData) {
    const key = this.getKey(userData.email);
    localStorage.setItem('isLogged', key);
    localStorage.setItem(key, JSON.stringify(userData));
    this.sync();
  }

  disconnect() {
    localStorage.removeItem('isLogged');
    if (this.userData.email) {
      localStorage.removeItem(this.getKey(this.userData.email));
    }
    this.sync();
  }

  createAccount(formData: SignupFormData): Promise<void> {
    // here you create the account
    return this.bo.createAccount(formData).then(userData => {
      this.connect(userData);
    }).catch(err => {
      this.disconnect();
      return Promise.reject(err);
    });
  }

  login(formData: SigninFormData): Promise<void> {
    return this.bo.login(formData).then(userData => {
      this.connect(userData);
    }).catch(err => {
      this.disconnect();
      return Promise.reject(err);
    });
  }

  logout() {
    this.bo.logout();
    this.disconnect();
  }

  sendActivationMail() {
    if (this.needsActivation) {
      this.bo.sendActivationMail();
    }
  }

  getKey(email: string) {
    return `user:${email}`;
  }

  delete(): Promise<void> {
    return this.bo.delete().then(() => {
      this.disconnect();
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
