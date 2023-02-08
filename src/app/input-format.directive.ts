import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: any;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log("on focus")
  }

  @HostListener('blur') onBlur(){
    let val: string = this.el.nativeElement.value;

    if(this.format == 'lowercase'){
      this.el.nativeElement.value = val.toLowerCase();
    }
    else if(this.format == 'uppercase'){
      this.el.nativeElement.value = val.toUpperCase();
    }
  }
}
