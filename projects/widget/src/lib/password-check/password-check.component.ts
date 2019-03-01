import { Component, OnInit, Input } from '@angular/core';
import { PasswordCheckService, PasswordRule } from '../password-check.service';

@Component({
  selector: 'widget-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss']
})
export class PasswordCheckComponent implements OnInit {

  private _password: string;
  @Input() set password(password: string) {
    this._password = password;
    this.rules = this.service.check(this._password);
  };

  rules: PasswordRule[];

  @Input() focus: boolean;

  constructor(public service: PasswordCheckService) { }

  ngOnInit() {
    this.rules = this.service.check(this._password);
  }

  allRulesVerified() {
    return this.rules.reduce((acc, rule) => {
      return acc && rule.verified
    }, true);
  }

}
