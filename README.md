# Angular User


Want to do a simple website with basic usability ?

Do not reinvent the wheel. Reuse !

Here are 3 modules that could accelerate your devs:
- @jlguenego/angular-layout : header, body, footer, form widgets, etc.
- @jlguenego/angular-user : manage user CRUD, login, logout, forgotten password, etc.
- @jlguenego/angular-user-firebase : implements user with Google Firebase in back office.



## Getting started

First do a normal angular application with Angular CLI.

```
npm i @angular/cli
ng new a-website --routing --style sass
cd a-website
```

Then install the modules you need.

```
npm i @jlguenego/angular-layout @jlguenego/angular-user
npm i @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

Make the following changes in the project:

`styles.scss`:

```scss
/* You can add global styles to this file, and also import other style files */
@import '../node_modules/@jlguenego/angular-layout/scss/variables';
// build the theme.
@import '../node_modules/@jlguenego/angular-layout/scss/palette';
@import '../node_modules/@jlguenego/angular-layout/scss/layout';

```

`app.module.ts`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@jlguenego/angular-layout';
import { UserModule } from '@jlguenego/angular-user';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

The purpose is to add the two modules `LayoutModule` and `UserModule`

`app.component.html`:

```html
<layout-header [navItems]="nav" [mobileNavItems]="mobileNav">
  <div class="site-id"><span>My</span><span class="secondary-light-color">Logo</span></div>
  <div class="utilities"><user-utilities></user-utilities></div>
  <div class="mobile-menu-icon">
    <user-mobile-menu-icon></user-mobile-menu-icon>
  </div>
  <div class="mobile-menu-header light-bg">
    <user-utilities></user-utilities>
    <div class="separator"></div>
  </div>
</layout-header>
<layout-body>
  <br>
  <p style="font-size: 2rem; text-align: center;">Congratulations! You made it!</p>
  <router-outlet></router-outlet>
</layout-body>
<layout-footer>
  <a routerLink="/legal">Terms of use</a>
</layout-footer>
<layout-dialog></layout-dialog>
```

`app.component.ts`:

```ts
import { Component } from '@angular/core';
import { ResponsiveService, NavItem } from '@jlguenego/angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public responsive: ResponsiveService) {
  }

  nav: NavItem[] = [
    { label: 'Menu1', route: '/menu1' },
    { label: 'Menu2', route: '/menu2' },
    { label: 'Menu3', route: '/menu3' },
  ];

  mobileNav: NavItem[] = [
    { label: 'Menu1', route: '/menu1' },
    { label: 'Menu2', route: '/menu2' },
  ];
}
```

Restart the dev server:

```
ng serve -o
```

You should see this responsive website:

![alt text](https://raw.githubusercontent.com/jlguenego/angular-user/master/resources/screenshot1.jpg)

# Author

Jean-Louis GUENEGO <jlguenego@gmail.com> 

https://jlg-consulting.com




