import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent{

  constructor(
    private PlacesService: PlacesService,
    private mapService: MapService
  ) { }

  goToMyLocation(){
    if(!this.PlacesService.isUserLocationReady) throw Error('No hay ubicación de usuario')
    if(!this.mapService.isMapReady) throw Error('No se ha inicializado el mapa')

    this.mapService.flyTo( this.PlacesService.useLocation! )

  }

}
