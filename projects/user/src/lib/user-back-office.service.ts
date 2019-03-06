import { Injectable } from '@angular/core';
import { SignupFormData, UserData, SigninFormData, UserService } from './user.service';
import { ERROR } from './error';

@Injectable({
  providedIn: 'root'
})
export class UserBackOfficeService {

  needsActivation = false;
  user: UserService;

  constructor() { }

  register(user: UserService) {
    this.user = user;
  }

  getKey(email: string) {
    return `user:${email}`;
  }

  createAccount(formData: SignupFormData): Promise<UserData> {
    const key = this.getKey(formData.email);
    const json = localStorage.getItem(key);
    if (json) {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    }
    const userData = {
      displayName: formData.displayName,
      email: formData.email,
      isVerified: false
    };
    localStorage.setItem('isLogged', key);
    localStorage.setItem(key, JSON.stringify(userData));
    return Promise.resolve(userData);
  }

  login(formData: SigninFormData): Promise<UserData> {
    const key = this.getKey(formData.email);
    const json = localStorage.getItem(key);
    if (!json) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    localStorage.setItem('isLogged', key);
    return Promise.resolve(<UserData>JSON.parse(json));
  }

  logout() {
    localStorage.removeItem('isLogged');
  }

  sendActivationMail() {
    // nothing to do because no mail verification.
  }

  delete(): Promise<void> {
    const key = this.getKey(this.user.userData.email);
    localStorage.removeItem(key);
    localStorage.removeItem('isLogged');
    return Promise.resolve();
  }

  refresh() {
    const key = localStorage.getItem('isLogged');
    if (key) {
      const json = localStorage.getItem(key);
      const userData: UserData = JSON.parse(json);
      return Promise.resolve(userData);
    } else {
      return Promise.reject();
    }
  }

}
