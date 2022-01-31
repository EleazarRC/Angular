import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api';
import { PlacesResponse, Feature } from '../interfaces/places';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }
  constructor( private placesApi: PlacesApiClient) {
    this.getUserLocation();
    console.log('Hola Mundo');

  }

  public async getUserLocation(): Promise<[number, number]>{
    console.log('Hola Mundo');
    return new Promise(( resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
          ( { coords } ) => {
            this.useLocation= [coords.longitude, coords.latitude];
            resolve( this.useLocation )
           },
           ( err ) => {
             alert('No se puedo obtener la geolocalización')
             console.log(err);
             reject();
           }
        );
    })

  }

  getPlacesByQuery( query: string = '') {

    if( !this.useLocation ) throw Error('No hay userLocation')

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
    params: {
      proximity: this.useLocation.join(',')
    }
      })
          .subscribe( resp => {

            console.log(resp.features);

            this.isLoadingPlaces = true;
            this.places = resp.features;
          });

  }


}
