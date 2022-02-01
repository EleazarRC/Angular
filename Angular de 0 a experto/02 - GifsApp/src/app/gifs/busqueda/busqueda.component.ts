import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  // Inyectar Servicio en el constructor
  constructor( private GifsService: GifsService ) {}

 buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }

    
    this.GifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = "";
  }
}
