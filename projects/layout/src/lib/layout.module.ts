import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent],
  imports: [
  ],
  exports: [HeaderComponent, FooterComponent, BodyComponent]
})
export class LayoutModule { }
