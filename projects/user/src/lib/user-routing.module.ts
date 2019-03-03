import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './routes/profile/profile.component';
import { SucessfullyDeletedComponent } from './routes/sucessfully-deleted/sucessfully-deleted.component';

const routes: Routes = [
  { path: 'my-profile', component: ProfileComponent },
  { path: 'account-deleted', component: SucessfullyDeletedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
