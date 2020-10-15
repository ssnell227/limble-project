import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTagList]',
})
export class TagListDirective {
  el: ElementRef<any>;
  constructor(el: ElementRef) {
    this.el = el
  }
  @HostListener('keyup') onKeyup() {
    this.checkForTag();
  }

  private checkForTag() {
    this.el.nativeElement.value.slice(-1) === '@' ? console.log('working') : null
  }
}
