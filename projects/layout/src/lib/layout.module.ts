import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteIdComponent } from './site-id/site-id.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LayoutConfigService } from './layout-config.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent, SiteIdComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent, BodyComponent, SiteIdComponent]
})
export class LayoutModule {
  static config: LayoutConfigService;
  static forRoot(config: LayoutConfigService): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: [
        {
          provide: LayoutConfigService,
          useValue: config
        }
      ]
    }
  }
}
