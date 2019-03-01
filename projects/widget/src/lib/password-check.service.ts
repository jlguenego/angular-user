import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export interface PasswordRule {
  verified: boolean,
  label: string,
  check: (password: string) => boolean,
}

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckService {

  constructor() { }

  makeRules(): PasswordRule[] {

    const lengthRule: PasswordRule = {
      verified: false,
      label: 'length must be at least 6 characters',
      check: password => password.length >= 6,
    };

    const atLeastOneUpperRule: PasswordRule = {
      verified: false,
      label: 'at least one uppercase letter',
      check: password => /[A-Z]/.test(password),
    };

    const atLeastOneLowerRule: PasswordRule = {
      verified: false,
      label: 'at least one lowercase letter',
      check: password => /[a-z]/.test(password),
    };

    const atLeastOneDigitRule: PasswordRule = {
      verified: false,
      label: 'at least one digit',
      check: password => /[0-9]/.test(password),
    };

    return [
      lengthRule,
      // atLeastOneUpperRule,
      // atLeastOneLowerRule,
      // atLeastOneDigitRule,
    ];
  }

  validate(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } => {
      const rules = this.check(control.value);
      for (let rule of rules) {
        if (rule.verified === false) {
          return { password: control.value }
        }
      }
      return null;
    }
  }

  check(password: string): PasswordRule[] {
    const rules = this.makeRules();

    rules.forEach(rule => {
      rule.verified = rule.check(password);
    });
    return rules;
  }
}
