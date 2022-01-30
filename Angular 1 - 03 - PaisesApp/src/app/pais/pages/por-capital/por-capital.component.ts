import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  termino : string = '';
  hayError: boolean = false; 
  paises  : Country[] = [];
  
  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    this.termino = termino;
    this.hayError = false; 

    //Actualizado https://rxjs.dev/deprecations/subscribe-arguments
    this.paisService.buscarCapita( this.termino )
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
      this.hayError = false;
      // TODO: crear sugerencias
  }
  
}
