import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './routes/contact/contact.component';
import { PresentationComponent } from './routes/presentation/presentation.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from '@jlguenego/angular-layout';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'legal', component: LegalComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
