import {
  Directive,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[libIsScrolled]'
})
export class IsScrolledDirective implements OnInit{

  constructor(private _el: ElementRef) {

  }

  public ngOnInit() : void {

  }
  @HostListener('mousewheel', ['$event']) onclick(e: any){
    if(this._el.nativeElement.getBoundingClientRect().y < 40 && this._el.nativeElement.getBoundingClientRect().y > 0){
      this._el.nativeElement.style.background = "red"
    }
    else if(this._el.nativeElement.getBoundingClientRect().y > -400 && this._el.nativeElement.getBoundingClientRect().y < 0){
      this._el.nativeElement.style.background = "fuchsia"
    }
    else if(this._el.nativeElement.getBoundingClientRect().y > -700 && this._el.nativeElement.getBoundingClientRect().y < -400){
      this._el.nativeElement.style.background = "black"
      this._el.nativeElement.style.color ='green'
    }
    else {
      this._el.nativeElement.style.color ='white'
    }
  }
}
