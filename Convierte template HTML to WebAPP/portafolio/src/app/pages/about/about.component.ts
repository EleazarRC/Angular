import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService ) {

    console.log(infoPaginaService.equipo[0].nombre);


   }

  ngOnInit(): void {

  }

}
