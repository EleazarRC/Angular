import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

  if( this.nuevo.nombre.trim().length === 0 ) {
    return;
  }

  this.dbzService.agregrarPersonaje( this.nuevo );
  /* this.onNuevoPersonaje.emit( this.nuevo ); */
    this.nuevo = {
      nombre: '',
      poder: 0
    } 
    
  }

  constructor( private dbzService: DbzServices) {
    
  }

}
