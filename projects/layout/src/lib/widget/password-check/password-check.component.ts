import { Component, OnInit, Input } from '@angular/core';
import { PasswordRule, PasswordCheckService } from '../../password-check.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss']
})
export class PasswordCheckComponent implements OnInit {

  private privatePassword = '';
  @Input() set password(password: string) {
    this.privatePassword = password;
    this.rules = this.service.check(this.privatePassword);
  }

  rules: PasswordRule[] = [];

  @Input() focus: boolean;

  constructor(public service: PasswordCheckService) { }

  ngOnInit() {
    this.rules = this.service.check(this.privatePassword);
  }

  allRulesVerified() {
    return this.rules.reduce((acc, rule) => {
      return acc && rule.verified;
    }, true);
  }

}
