import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-activation-page',
  templateUrl: './activation-page.component.html',
  styleUrls: ['./activation-page.component.scss']
})
export class ActivationPageComponent implements OnInit {
  title = 'Activate your account';
  constructor(public user: UserService) { }

  ngOnInit() {
    this.user.sendActivationMail();
  }

}
