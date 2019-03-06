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
    return Promise.resolve({
      displayName: formData.displayName,
      email: formData.email,
      isVerified: false
    });
  }

  login(formData: SigninFormData): Promise<UserData> {
    const key = this.getKey(formData.email);
    const json = localStorage.getItem(key);
    if (!json) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    return Promise.resolve(<UserData>JSON.parse(json));
  }

  logout() {
    // nothing to do.
  }

  sendActivationMail() {
    // nothing to do.
  }

  delete(): Promise<void> {
    const key = this.getKey(this.user.userData.email);
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  refresh() {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged) {
      const key = this.getKey(isLogged);
      const json = localStorage.getItem(key);
      const userData: UserData = JSON.parse(json);
      return Promise.resolve(userData);
    } else {
      return Promise.reject();
    }
  }

}
