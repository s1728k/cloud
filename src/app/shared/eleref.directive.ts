import { Directive, HostListener, ElementRef, Renderer, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[appEleref]'
})
export class ElerefDirective {

  @Input() classId: string;
	@Output() clicked = new EventEmitter();
  @Output() longpress = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('document:click', ['$event'])

  handleClick(event) {
    if (this.el.nativeElement.contains(event.target)) {
      if(this.classId!=""){
        if(event.path[0].className.indexOf(this.classId)!=-1){
          this.clicked.emit(false);
        }else{
          this.clicked.emit(true);
        }
      }else{
        this.clicked.emit(true);
      }
    } else {
      this.clicked.emit(false);
    }
    // this.longpress.emit(true);
    // let timer = setTimeout(function() {
    //   // console.log("set timer");
    //   return true;
    // },1000);
    // if (timer){
    //   this.longpress.emit(true);
    // }
  }

  boollongpress = false;
  // @HostListener('document:mouseup', ['$event'])
  // onMouseup(event) {
  //   if (this.el.nativeElement.contains(event.target)) {
  //     this.boollongpress = false;
  //   }
  // }

  // @HostListener('document:mousedown', ['$event'])
  // onMousedown(event) {
  //   if (this.el.nativeElement.contains(event.target)) {
  //     this.boollongpress = true;
  //     this.setLongpress();
  //   }
  // }

  @HostListener('document:touchend', ['$event'])
  onMouseup(event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.boollongpress = false;
    }
  }

  @HostListener('document:touchstart', ['$event'])
  onMousedown(event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.boollongpress = true;
      this.setLongpress();
    }
  }

  async setLongpress(){
    let wt = await this.resolveAfter2Seconds(true);
    if (this.boollongpress){this.longpress.emit(true);}
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  // @HostListener('mousemove', ['$event'])
  // onMousemove(event: MouseEvent) {
  //     if(this.mouseDown) {
  //        this.scene.rotate(
  //           event.clientX - this.last.clientX,
  //           event.clientY - this.last.clientY
  //        );
  //        this.last = event;
  //     }
  // }

}
