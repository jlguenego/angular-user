import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupFormData, UserBackOfficeService, UserData, ERROR, SigninFormData } from '@jlguenego/angular-user';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseBackOfficeService extends UserBackOfficeService {
  needsActivation = true;

  constructor(private afAuth: AngularFireAuth) {
    super();
  }

  createAccount(formData: SignupFormData): Promise<UserData> {
    console.log('email', formData.email);
    console.log('createAccount password', formData.password);
    let userData: UserData = undefined;
    return this.afAuth.auth.createUserWithEmailAndPassword(formData.email, formData.password).then(credentials => {
      userData = {
        email: credentials.user.email,
        displayName: undefined,
        isVerified: credentials.user.emailVerified
      }
      return this.afAuth.auth.currentUser.updateProfile({ displayName: formData.displayName });
    }).then(() => {
      userData.displayName = formData.displayName;
      if (this.needsActivation && (!userData.isVerified)) {
        this.afAuth.auth.currentUser.sendEmailVerification();
      }
      return Promise.resolve(userData);
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
        isVerified: credentials.user.emailVerified,
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

  sendActivationMail() {
    if (this.needsActivation) {
      this.afAuth.auth.currentUser.sendEmailVerification();
    }
  }
}
