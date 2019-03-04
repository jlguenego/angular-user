import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[layoutAnchor]'
})
export class AnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
