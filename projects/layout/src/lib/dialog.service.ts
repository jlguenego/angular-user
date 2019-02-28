import { Injectable, Type } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { timer } from 'rxjs';

export type DialogPage = Type<{}>;

export interface PageComponent {
  title: string;
  data: any;
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
    });
  }

  close() {
    this.component.isVisible = false;
  }
}
