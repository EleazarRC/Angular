import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//ReactiveFormsModule (IMPORTAR EN MODULO PARA FORMULARIOS REACTIVOS)
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit {

/*   miFormulario: FormGroup = new FormGroup({
    nombre:       new FormControl('RTX 4080ti'),
    precio:       new FormControl(1500),
    existencias:  new FormControl(5),
  }); */

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)]  ],
  });


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      /* this.miFormulario.setValue({
        nombre: '',
        precio: null,
        existencias: 0
      }) */
      this.miFormulario.reset({
        nombre: '',
        precio: null,
        existencias: 0
      })
      /* this.miFormulario.patchValue({
        nombre: '', Este consume menos recursos pero no reinicia todo.
        precio: null,
        existencias: 0
      }) */


  }

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo]?.errors &&
    this.miFormulario.controls[campo]?.touched;
  }

  guardar() {

    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}