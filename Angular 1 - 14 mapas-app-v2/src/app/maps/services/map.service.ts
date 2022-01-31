import { Injectable } from '@angular/core';
import Mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Mapboxgl.Map;

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Mapboxgl.Map){
    this.map = map;
  }

  flyTo( coords: Mapboxgl.LngLatLike ) {
    if( !this.isMapReady ) throw Error('El mapa no está inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }


}
