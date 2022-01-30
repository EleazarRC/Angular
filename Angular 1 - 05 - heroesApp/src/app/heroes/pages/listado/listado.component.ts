import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes :Heroe[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
        .subscribe( {
          next: ( heroes ) => {
            this.heroes = heroes;
          },
          error: ( e ) => {
            console.log('No se han podido cargar los héroes: ' + e )
          },
          complete: () => console.info( 'complete ')
        } )
  }

}
