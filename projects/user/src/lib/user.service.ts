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
  hasSocialLogin = this.bo.hasSocialLogin;


  constructor(
    private bo: UserBackOfficeService
  ) {
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
    this.isLogged = true;
    this.userData = userData;
  }

  disconnect() {
    this.isLogged = false;
    this.userData = undefined;
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

  updatePassword(currentPassword: string, newPassword: string) {
    return this.bo.updatePassword(currentPassword, newPassword);
  }

  loginWithFacebook():Promise<void> {
    return this.bo.loginWithFacebook();
  }

  loginWithGoogle():Promise<void> {
    return this.bo.loginWithGoogle();
  }

}
