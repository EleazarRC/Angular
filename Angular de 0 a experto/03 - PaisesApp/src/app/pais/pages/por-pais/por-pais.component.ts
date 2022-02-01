import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false; 
  paises  : Country[] = [];
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) {
    
  }

  buscar( termino: string){
    
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false; 

    //Actualizado https://rxjs.dev/deprecations/subscribe-arguments
    this.paisService.buscarPais( this.termino )
      .subscribe ({
        next: ( paises ) =>{
          console.log(paises)
          this.paises = paises;
        },
        error: (e) => {
          this.hayError = true;
          console.error( e )
          this.paises = [];
        },
        complete: () => console.info( 'complete' )
      })
  }
  
  sugerencias( termino :string ){
    this.mostrarSugerencias = true;
      this.hayError = false;
      this.termino = termino;
     
      this.paisService.buscarPais( termino )
        .subscribe( {
          next: ( paises ) => {
            this.paisesSugeridos = paises.splice( 0, 5 )
          },
          error: ( e ) => {
            this.paisesSugeridos = []
          }
        })
      }

    buscarSugerido( termino: string ) {
      this.buscar(termino);


    }
}
