import { Component, OnInit } from '@angular/core';
import { DialogService } from '@jlguenego/angular-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'user-password-changed-page',
  templateUrl: './password-changed-page.component.html',
  styleUrls: ['./password-changed-page.component.scss']
})
export class PasswordChangedPageComponent implements OnInit {

  constructor(public dialog: DialogService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
    this.router.navigateByUrl('/user');
  }

}
