import { Injectable } from '@angular/core';
import { SignupFormData, UserData, SigninFormData, UserService } from './user.service';
import { ERROR } from './error';

/**
 * Stub for userbackoffice (just use localstorage)
 *
 * @export
 * @class UserBackOfficeService
 */
@Injectable({
  providedIn: 'root'
})
export class UserBackOfficeService {
  
  sendMailOnCreate = false;
  user: UserService;

  constructor() { }

  register(user: UserService) {
    this.user = user;
  }

  getKey(email: string) {
    return `user:${email}`;
  }

  createAccount(formData: SignupFormData): Promise<void> {
    const key = this.getKey(formData.email);
    const json = localStorage.getItem(key);
    if (json) {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    }
    return Promise.resolve();
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

  delete(): Promise<void> {
    const key = this.getKey(this.user.userData.email);
    localStorage.removeItem(key);
    return Promise.resolve();
  }

}
