import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
     .mapa-container{
      width: 100%;
      height: 100%;
    }
    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMap!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] =[-0.09779322195998144, 39.93436378055235]

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.leerLocalStorage();
    // Marcador personalizado
/*     const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';
    new mapboxgl.Marker({
      element: markerHtml // SE PUEDE PONER IMÁGENES ETC
    }) */

    // Marcador normal
/*     new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo( this.mapa ); */
  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    })

  }

  //center.marker._lngLat.lng, center.marker._lngLat.lat
  irMarcador( marker: any){
     this.mapa.flyTo({
        center: marker.getLngLat()
      })
  }

  guardarMarcadoresLocalStorage(){

   /*  const lnglatArr: { color: string; centro: number[]; }[] = []; */

    const lnglatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {

      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat()

      lnglatArr.push({
        color: color,
        centro: [ lng, lat ]
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lnglatArr))

  }

  leerLocalStorage(){

    if( !localStorage.getItem('marcadores')){
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse( localStorage.getItem('marcadores')! );

    lngLatArr.forEach(m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat( m.centro! )
        .addTo( this.mapa );

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      })

    });

  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);
    this.guardarMarcadoresLocalStorage();
  }
}
