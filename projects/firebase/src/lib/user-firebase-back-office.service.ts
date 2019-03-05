import { Injectable } from '@angular/core';
import { ERROR, UserBackOfficeService, SignupFormData, SigninFormData, UserData } from '@jlguenego/angular-user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseBackOfficeService extends UserBackOfficeService {
  sendMailOnCreate = true;

  constructor(private afAuth: AngularFireAuth) {
    super();
  }

  createAccount(formData: SignupFormData): Promise<UserData> {
    console.log('email', formData.email);
    console.log('createAccount password', formData.password);
    return this.afAuth.auth.createUserWithEmailAndPassword(formData.email, formData.password).then(credentials => {
      return this.afAuth.auth.currentUser.updateProfile({ displayName: formData.displayName });
    }).then(() => {
      if (this.sendMailOnCreate) {
        this.afAuth.auth.currentUser.sendEmailVerification();
      }
      return Promise.resolve({
        displayName: formData.displayName,
        email: formData.email
      });
    }).catch(err => {
      return Promise.reject(ERROR.MAIL_ALREADY_IN_USE);
    });
  }

  login(formData: SigninFormData): Promise<UserData> {
    return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password).then(credentials => {
      console.log('credentials', credentials);
      const userData: UserData = {
        email: credentials.user.email,
        displayName: credentials.user.displayName,
      };
      return Promise.resolve(userData);
    }).catch(err => {
      console.log('cannot login', err);
      return Promise.reject(ERROR.BAD_LOGIN);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      console.log('logged out.');
    });
  }

  delete(): Promise<void> {
    return this.afAuth.auth.currentUser.delete();
  }
}
