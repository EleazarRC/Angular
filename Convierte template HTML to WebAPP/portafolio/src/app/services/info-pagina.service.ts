import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info!: Data;
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }


  private cargarInfo() {
    this.http.get<Data>('assets/data/data-pagina.json')
    .subscribe( resp => {
      this.info = resp;
      this.cargada = true;
    })
  }

  private cargarEquipo() {
    this.http.get<any[]>('https://yarnstore-61847-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( resp => {
      this.equipo = resp;
    })
  }
}
