import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

export interface NavItem { label: string, route: string };

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  faBars = faBars;

  @Input() navItems: NavItem[] = [
    { label: 'Menu1', route: '/menu1' },
    { label: 'Menu2', route: '/menu2' },
  ];

  private isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public responsive: ResponsiveService) {
    this.isOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
      this.manageBody();
    });
  }

  ngOnInit() { }

  toggleMenu() {
    this.isOpen$.next(!this.isOpen$.value);
  }

  openMenu() {
    this.isOpen$.next(true);
  }

  closeMenu() {
    this.isOpen$.next(false);
  }

  manageBody() {
    if (this.isMenuOpen && window) {
      window.document.body.style.position = 'fixed';
    } else {
      window.document.body.style.position = 'relative';
    }
  }

}
