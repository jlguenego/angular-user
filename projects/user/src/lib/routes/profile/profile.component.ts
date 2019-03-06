import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { DialogService } from '@jlguenego/angular-layout';
import { ErrorPageComponent } from 'projects/layout/src/lib/layout/pages/error-page/error-page.component';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public user: UserService, private router: Router, private dialog: DialogService) { }

  ngOnInit() {
  }

  delete() {
    const confirm = window.confirm('Are you sure you want to delete your account ?');
    if (confirm) {
      this.user.delete().then(() => {
        this.router.navigate(['/user/account-deleted']);
      }).catch(err => this.dialog.open(ErrorPageComponent, {
        message: "Please signout and signin again to delete your account.",
        explanation: "For security reason, some operations need a recent authentification."
      }));
    }
  }

}
