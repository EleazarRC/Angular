import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region  : ['', Validators.required],
    pais    : ['', Validators.required],
    frontera: ['', Validators.required]
  })

  // Llenar selectores
  regiones : string[]    = [];
  paises   : PaisSmall[] = [];
  fronteras: string[]    = [];

  //UI
  cargando: boolean = false;

  constructor( private fb: FormBuilder,
                private paisesServiceService: PaisesServiceService) { }

  ngOnInit(): void {
    this.regiones = this.paisesServiceService.regiones;

    // Cuando cambie la region
    /* this.miFormulario.get('region')?.valueChanges
      .subscribe( region => {
        console.log(region)
        this.paisesServiceService.getPaisesPorRegion(region)
        .subscribe( paises => {
          console.log(paises)
          this.paises = paises;
        })

      }) */

      this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          } ),
          switchMap( region =>  this.paisesServiceService.getPaisesPorRegion(region))
          )
          .subscribe( paises => {
          this.paises = paises;
          this.cargando = false;
        })

        this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.cargando = true;
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
          } ),
          switchMap( codigo => this.paisesServiceService.getPaisPorCca3(codigo))
        )
        .subscribe( pais => {

          this.fronteras = pais![0]?.borders || [] ;
          this.cargando = false;
        })


  }

  guardar(){

    console.log(this.miFormulario.value)
  }

}
