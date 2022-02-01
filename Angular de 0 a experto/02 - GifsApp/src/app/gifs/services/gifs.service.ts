import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SeachGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // https://developers.giphy.com/docs/sdk
  private apiKey      : string = '79iDgQppSyOxP8hMvQt0V9DO7XtO2eJO';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  private _historial  : string[] = [];

  public resultados: Gif[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    
    this._historial = JSON.parse( localStorage.getItem( 'historial' )! ) || [];
    this.resultados = JSON.parse( localStorage.getItem( 'resultados' )! ) || [];
   /*  if( localStorage.getItem( 'historial' ) ){
      this._historial = JSON.parse( localStorage.getItem( 'historial' )! );
    } */

  }


  // Recuerda iyectar el servicio
  buscarGifs( query: string ) {

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem( 'historial', JSON.stringify( this._historial ) );

    }

    const params = new HttpParams()
          .set( 'api_key', this.apiKey )
          .set( 'limit', '10' )
          .set( 'q', query );


    //https://app.quicktype.io/ Para pasar respuestas a interfaces y despues especificar el tipo de respuesta.
    this.http.get<SeachGifsResponse>( `${ this.servicioUrl }/search`, { params })
      .subscribe( ( resp: any ) => {
        this.resultados = resp.data;

        localStorage.setItem( 'resultados', JSON.stringify( this.resultados ) );

      })
  }

}
