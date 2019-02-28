import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './routes/contact/contact.component';
import { PresentationComponent } from './routes/presentation/presentation.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'presentation', component: PresentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
