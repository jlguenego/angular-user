import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public user: UserService, private router: Router) { }

  ngOnInit() {
  }

  delete() {
    const confirm = window.confirm('Are you sure you want to delete your account ?');
    if (confirm) {
      this.user.delete().then(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
