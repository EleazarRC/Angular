import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter;
  //Cuando el usuario deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject;

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime( 300 ))
      .subscribe( valor => {
        this.onDebounce.emit( valor );     
    })
  }

  buscar(){
    this.onEnter.emit ( this.termino );
  }

  teclaPresonada( ) {
    this.debouncer.next( this.termino );
  }
}
