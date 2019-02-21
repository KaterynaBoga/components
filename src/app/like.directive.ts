import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {

  constructor(
    private el: ElementRef
  ) { 
    this.el.nativeElement.style.color = "#f00";
  }

}
