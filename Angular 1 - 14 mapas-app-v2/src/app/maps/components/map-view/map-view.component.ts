import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Mapboxgl from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
      private placesService: PlacesService,
      private mapService: MapService) { }

  ngAfterViewInit(): void {
    if(!this.placesService.useLocation) throw Error('PlacesService.useLocation')

    const map = new Mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.useLocation,
      zoom: 14
      });

      const popup = new Mapboxgl.Popup( )
          .setHTML(`
            <h6>Aquí estoy</h6>
            <span>Estoy en este lugar del mundo</span>
          `);

      new Mapboxgl.Marker({ color: 'red'})
        .setLngLat( this.placesService.useLocation )
        .setPopup( popup )
        .addTo( map )

    this.mapService.setMap( map );

  }

}
