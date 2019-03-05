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
ng serve -o
```

Check the normal scaffold Angular app is running.

Then install the modules you need.

```
npm i @jlguenego/angular-layout @jlguenego/angular-user
```

Make the following change in the project:

`app.component.html`:

```html
<layout-header [navItems]="nav" [mobileNavItems]="mobileNav">
  <div class="site-id"><span>Neuro</span><span class="secondary-light-color">Shake</span></div>
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
    { label: 'Brainstorm', route: '/brainstorm' },
    { label: 'Presentation', route: '/presentation' },
    { label: 'Contact', route: '/contact' },
  ];

  mobileNav: NavItem[] = [
    { label: 'Mobile', route: '/brainstorm' },
    { label: 'Presentation', route: '/presentation' },
    { label: 'Contact', route: '/contact' },
  ];
}
```

Restart the dev server:

```
ng serve
```

# Author

Jean-Louis GUENEGO <jlguenego@gmail.com> 

https://jlg-consulting.com




