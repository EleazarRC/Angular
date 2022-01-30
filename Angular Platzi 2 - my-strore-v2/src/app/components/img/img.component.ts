import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit , OnDestroy {

  img: string = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string){
    console.log('change just img =>', this.img)
    this.img = newImg;
  }

  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = 'https://www.m2crowd.com/core/i/placeholder.png';
/*   counter = 0;
  counterFn: number | undefined; */

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges( changes: SimpleChanges) {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes)
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    /* this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run count');
    },1000); */
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
  /*   window.clearInterval(this.counterFn) */
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
