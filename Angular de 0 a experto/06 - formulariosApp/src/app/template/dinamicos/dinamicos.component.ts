import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Eleazar',
    favoritos: [
      { id:1, nombre:'Metal Gear' },
      { id:2, nombre:'DeathStranding' }
    ]
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
    /* this.persona.favoritos.push(this.nuevoJuego); */
  }
  eliminar( index: number ){
    this.persona.favoritos.splice(index, 1)
  }

  guardar(){
    console.log('Formulario Posteado');
  }
  nombreValido(){
    return  this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched;
  }

}
