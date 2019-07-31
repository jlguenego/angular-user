import { Component, OnInit, ComponentRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DIALOG_DEFAULT_MAXWIDTH, DialogService, DialogPage } from '../../dialog.service';
import { AnchorDirective } from '../../widget/anchor.directive';


@Component({
  selector: 'layout-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  isVisible = false;
  title = 'Error: I need a title';
  faTimes = faTimes;
  maxWidth = DIALOG_DEFAULT_MAXWIDTH;
  @ViewChild(AnchorDirective, { static: false }) anchorHost: AnchorDirective;

  constructor(
    public dialog: DialogService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.dialog.registerDialogComponent(this);
  }

  ngOnInit() { }

  loadComponent(component: DialogPage): ComponentRef<{}> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.anchorHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    return componentRef;
  }

}
