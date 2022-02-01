import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  personas =[
    {
      nombre: 'Susana',
      genero: 'femenino'
    },
    {
      nombre: 'Eleazar',
      genero: 'masculino'
    }
  ]
  toggle=0;
  cambiarPersona(){
    this.toggle = 1 - this.toggle;
  }

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Manolo', 'Benito'];
  clientesMap= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un  cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  quitarCliente(){
    this.clientes.pop();
  }

  persona = {
    nombre: 'Eleazar',
    edad: 37,
    direccion: 'España, Castellón'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, rejects) => {

    setTimeout(() => {
      resolve( 'Tenemos la data de la promesa' )
    }, 3500);

  });



}
