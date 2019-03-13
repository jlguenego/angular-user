import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './routes/user/user.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { SucessfullyDeletedComponent } from './routes/sucessfully-deleted/sucessfully-deleted.component';
import { UpdatePasswordComponent } from './routes/update-password/update-password.component';
import { InitPasswordComponent } from './routes/init-password/init-password.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: '', component: ProfileComponent },
      { path: 'account-deleted', component: SucessfullyDeletedComponent },
      { path: 'password-update', component: UpdatePasswordComponent },
      { path: 'password-init', component: InitPasswordComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
