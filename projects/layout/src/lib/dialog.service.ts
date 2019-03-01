import { Injectable, Type } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { timer } from 'rxjs';

export type DialogPage = Type<{}>;

export const DIALOG_DEFAULT_MAXWIDTH = '30rem';

export interface PageComponent {
  title: string;
  data?: any;
  maxWidth?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  component: DialogComponent;
  currentPage: DialogPage;

  constructor() { }

  registerDialogComponent(c: DialogComponent) {
    this.component = c;
  }

  open(page: DialogPage, data = {}) {
    this.component.isVisible = true;
    // needs digestion of isVisible. so we use the timer.
    timer(0).subscribe(() => {
      this.currentPage = page;
      const componentRef = this.component.loadComponent(this.currentPage);
      const pageComponent = (<PageComponent>componentRef.instance);
      this.component.title = pageComponent.title;
      pageComponent.data = data;
      this.component.maxWidth = pageComponent.maxWidth || DIALOG_DEFAULT_MAXWIDTH;
    });
  }

  close() {
    this.component.isVisible = false;
  }
}
