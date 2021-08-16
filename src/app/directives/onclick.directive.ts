import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appOnclick]'
})
export class OnclickDirective {
  
  constructor(private elementref:ElementRef) {
    console.log('directive')
   }
   @HostListener('click') myClick(){
    console.log('I clicked on my todo app')
  }
   

}
