import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone: true
})
export class ShadowDirective {

  // We can also recive element from constructor
  constructor(el:ElementRef) { 
    
  }

  @HostBinding("style.color")
  color = "blue"

  @HostListener("mouseenter",["$event"])
  onMouseEvent(e:MouseEvent){ 
    (e.target as HTMLElement).style.boxShadow =  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
    console.log("user mouse impression", (e.target as HTMLElement).style)
  }

  @HostListener("mouseleave",["$event"])
  onMouseEventOut(e:MouseEvent){ 
    (e.target as HTMLElement).style.boxShadow =  "rgba(149, 157, 165, 0.2) 0px 8px 24px;";
    console.log("user mouse impression leaved", (e.target as HTMLElement).style)
  }

}
