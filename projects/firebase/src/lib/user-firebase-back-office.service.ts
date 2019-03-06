import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupFormData, UserBackOfficeService, UserData, ERROR, SigninFormData } from '@jlguenego/angular-user';
import { ResponsiveService } from '@jlguenego/angular-layout';
import { auth } from 'firebase/app';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseBackOfficeService extends UserBackOfficeService {
  needsActivation = true;
  hasSocialLogin = true;

  constructor(
    private afAuth: AngularFireAuth,
    private responsive: ResponsiveService
  ) {
    super();
    this.afAuth.user.subscribe(fuser => {
      if (fuser) {
        const userData = {
          email: fuser.email,
          displayName: fuser.displayName,
          isVerified: fuser.emailVerified
        };

        this.user.connect(userData);
      } else {
        this.user.disconnect();
        this.manageFacebookSocialLoginIssue();
      }
      this.user.newsFeed.next(this.user);
    });
  }

  manageFacebookSocialLoginIssue() {
    // only in mobile situation.
    if (this.responsive.isDesktop) {
      return;
    }

    this.afAuth.auth.getRedirectResult().catch(async error => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        await this.afAuth.auth.fetchSignInMethodsForEmail(error.email);
        const provider = new auth.GoogleAuthProvider();
        provider.setCustomParameters({ login_hint: error.email });
        return this.afAuth.auth.signInWithRedirect(provider);
      }
    });

  }

  createAccount(formData: SignupFormData): Promise<UserData> {
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
      const userData: UserData = {
        email: credentials.user.email,
        displayName: credentials.user.displayName,
        isVerified: credentials.user.emailVerified,
      };
      return Promise.resolve(userData);
    }).catch(err => {
      console.error('cannot login', err);
      return Promise.reject(ERROR.BAD_LOGIN);
    });
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut().then(() => {
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

  refresh() {
    const user = this.afAuth.auth.currentUser;
    if (user) {
      return user.reload().then(() => {
        const userData: UserData = {
          email: user.email,
          displayName: user.displayName,
          isVerified: user.emailVerified
        };
        return Promise.resolve(userData);
      }).catch(err => {
        console.error('error while reloading account', err);
        return Promise.reject();
      });
    } else {
      return Promise.reject();
    }
  }

  updatePassword(currentPassword: string, newPassword: string) {
    if (!this.user.userData) {
      return Promise.reject(ERROR.BAD_PASSWORD);
    }
    return this.afAuth.auth.signInWithEmailAndPassword(this.user.userData.email, currentPassword)
      .then(() => {
        return this.afAuth.auth.currentUser.updatePassword(newPassword);
      });

  }

  loginWithGoogle(): Promise<void> {
    if (this.responsive.isMobile) {
      return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    }
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(noop);
  }

  loginWithFacebook(): Promise<void> {
    if (this.responsive.isMobile) {
      return this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
    }
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(noop)
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const provider = new auth.GoogleAuthProvider();
          provider.setCustomParameters({ login_hint: error.email });
          return this.afAuth.auth.signInWithPopup(provider).then(() => {
            this.afAuth.auth.currentUser.linkWithPopup(new auth.FacebookAuthProvider())
          });
        }
        return Promise.reject();
      });

  }

  update(displayName: string) {
    const user = this.afAuth.auth.currentUser;
    return user.updateProfile({ displayName });
  }
}
