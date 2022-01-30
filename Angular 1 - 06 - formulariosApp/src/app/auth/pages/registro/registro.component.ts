import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones'; */
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
      nombre: ['', [ Validators.required, Validators.pattern( this.vs.nombreApellidoPattern ) ] ],
      email: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern)], [this.emailVS] ],
      username: ['', [ Validators.required, this.vs.noPuedeSerStrider ], ],
      password: ['', [ Validators.required, Validators.minLength(6)], ],
      passwordMach: ['', [ Validators.required, Validators.minLength(6) ], ],
  },{
    validators: [ this.vs.camposIguales('password', 'passwordMach') ]
  })

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.['required']){
        return 'Email es obligatorio'
    } else if(errors?.['pattern']){
      return 'El valor ingresado no tiene el formato de correo'
    } else if ( errors?.['emailTomado']){
      return 'El email ya está tomado'
    }
    return '';
  }

  constructor(  private fb: FormBuilder,
                private vs: ValidatorService,
                private emailVS: EmailValidatorService) { }

  ngOnInit(): void {
    // Para cuando se está programando dejar valores
    // por defecto que cumplen los requisitos de validación
    this.miFormulario.reset({
      nombre: 'Eleazar Ramos',
      email: 'test@test.com',
      username: 'test',
      password: 123456,
      passwordMach: 123456
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario() {

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }
}
