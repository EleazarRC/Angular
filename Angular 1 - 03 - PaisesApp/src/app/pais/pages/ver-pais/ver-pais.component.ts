import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
     ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.paisService.getPaisByCca2( id ) ),
        tap( console.log )
      )
      .subscribe( pais => {
  
        this.pais = pais[0];

      })

    /* this.activatedRoute.params
      .subscribe( ({ id }) => { //Se llama ID por que en el router lo definimos así
        
    this.PaisService.getPaisByCca2( id )
      .subscribe( pais => {
        console.log( pais )
      } )
    }); */


  }

}
