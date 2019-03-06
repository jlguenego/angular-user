import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './routes/profile/profile.component';
import { SucessfullyDeletedComponent } from './routes/sucessfully-deleted/sucessfully-deleted.component';
import { UpdatePasswordComponent } from './routes/update-password/update-password.component';
import { UserComponent } from './routes/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: '', component: ProfileComponent },
      { path: 'account-deleted', component: SucessfullyDeletedComponent },
      { path: 'password-update', component: UpdatePasswordComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
