import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%;
    }
    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMap!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] =[-0.09779322195998144, 39.93436378055235]

  constructor() {
  }
  ngOnDestroy(): void {
    this.mapa.off( 'zoom', ( ) => {} )
    this.mapa.off( 'zoomend', ( ) => {} )
    this.mapa.off( 'move', ( ) => {} )
  }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
      });

    this.mapa.on('zoom', ( ev )=> {
      this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on('zoomend', ( ev )=> {
        if( this.mapa.getZoom() > 18 ) {
          this.mapa.zoomTo(18);
        }
    })

    this.mapa.on('move', (event) => {
        const target = event.target;
        const { lng, lat } = target.getCenter();
        this.center = [lng, lat]
    })
  }

  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn(){
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio( valor: string ){
    this.mapa.zoomTo( Number( valor ))
  }

}
