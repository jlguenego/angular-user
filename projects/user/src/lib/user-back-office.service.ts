import { Injectable } from '@angular/core';
import { SignupFormData, UserData, SigninFormData, UserService } from './user.service';
import { ERROR } from './error';

@Injectable({
  providedIn: 'root'
})
export class UserBackOfficeService {

  needsActivation = false;
  hasSocialLogin = false;
  hasForgottenPassword = false;
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
      isVerified: false,
    };
    localStorage.setItem('isLogged', key);
    localStorage.setItem(key, JSON.stringify({ ...userData, password: formData.password }));
    return Promise.resolve(userData);
  }

  login(formData: SigninFormData): Promise<UserData> {
    const key = this.getKey(formData.email);
    const json = localStorage.getItem(key);
    if (!json) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    const data = JSON.parse(json);
    if (data.password !== formData.password) {
      return Promise.reject(ERROR.BAD_LOGIN);
    }
    delete data.password;
    localStorage.setItem('isLogged', key);
    return Promise.resolve(data as UserData);
  }

  logout(): Promise<void> {
    localStorage.removeItem('isLogged');
    return Promise.resolve();
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

  updatePassword(currentPassword: string, newPassword: string) {
    const key = localStorage.getItem('isLogged');
    if (key) {
      const json = localStorage.getItem(key);
      const data = JSON.parse(json);
      if (data.password !== currentPassword) {
        return Promise.reject(ERROR.BAD_PASSWORD);
      }
      data.password = newPassword;
      localStorage.setItem(key, JSON.stringify(data));
      return Promise.resolve();
    } else {
      return Promise.reject(ERROR.BAD_PASSWORD);
    }
  }

  initPassword(newPassword: string): Promise<void> {
    return Promise.resolve();
  }

  loginWithGoogle(): Promise<void> {
    return Promise.reject();
  }
  loginWithFacebook(): Promise<void> {
    return Promise.reject();
  }

  update(obj: { displayName: string, photoURL: string }): Promise<void> {
    const key = localStorage.getItem('isLogged');
    if (!key) {
      return Promise.reject(ERROR.NOT_CONNECTED);
    }
    const json = localStorage.getItem(key);
    const data = JSON.parse(json);
    data.displayName = obj.displayName;
    data.photoURL = obj.photoURL;
    localStorage.setItem(key, JSON.stringify(data));
    return Promise.resolve();
  }

  sendResetPasswordEmail(email: string): Promise<void> {
    return Promise.resolve();
  }

}
