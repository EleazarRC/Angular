import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisSmall } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/paisCode.interdace';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private _baseUrl: string = 'https://restcountries.com/v3.1';
  private _baseUrl2: string = 'https://restcountries.com/v2';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones(): string[] {
    return [ ...this._regiones];
  }

  constructor( private http: HttpClient) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]>{
    const url: string = `${this._baseUrl}/region/${region}?fields=name,cca3`
    return this.http.get<PaisSmall[]>( url );
  }

  getPaisPorCca3( codigo: string ): Observable<Pais[] | null> {

    if(!codigo) {
      return of(null);
    }
    const url: string = `${ this._baseUrl2}/alpha?codes=${codigo}`;

    return this.http.get<Pais[]>(url)
  }

}
