import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appTagList]',
})
export class TagListDirective {
  el: ElementRef<any>;
  constructor(el: ElementRef<any>) {
    this.el = el
  }

  

  
}
