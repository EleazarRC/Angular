import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';
Mapboxgl.accessToken = 'pk.eyJ1Ijoic2l4ZW4yNSIsImEiOiJja3l3dmc4eWkwYzdjMnJzM3k0bzlrZHZnIn0.J6UIviqQ6K9hKqU9zI9__g';

if( !navigator.geolocation ) {
  alert('Navegador no soporta el Geolocation')
  throw new Error('Navegador no soporta el Geolocation')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
