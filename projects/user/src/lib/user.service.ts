import { Injectable } from '@angular/core';
import { UserBackOfficeService } from './user-back-office.service';
import { BehaviorSubject, timer } from 'rxjs';
import { errFn } from './misc';

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
  photoURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData;
  isLogged: boolean = undefined;
  needsActivation = this.bo.needsActivation;
  hasSocialLogin = this.bo.hasSocialLogin;

  newsFeed: BehaviorSubject<UserService> = new BehaviorSubject(this);

  constructor(
    private bo: UserBackOfficeService
  ) {
    this.bo.register(this);
    this.refresh();
  }

  refresh(): Promise<void> {
    return timer(0).toPromise().then(() => this.bo.refresh()).then(userData => {
      this.connect(userData);
      return;
    }).catch(err => {
      this.disconnect();
    });
  }

  connect(userData: UserData) {
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
    return this.bo.logout().then(() => this.disconnect()).catch(errFn);
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

  loginWithFacebook(): Promise<void> {
    return this.bo.loginWithFacebook();
  }

  loginWithGoogle(): Promise<void> {
    return this.bo.loginWithGoogle();
  }

  update(obj: { displayName: string, photoURL: string }): Promise<void> {
    return this.bo.update(obj).then(() => this.refresh());
  }

}
