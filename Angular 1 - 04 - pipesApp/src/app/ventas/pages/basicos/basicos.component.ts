import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower: string = 'eleazar';
  nombreUpper: string = 'ELEAZAR';
  nombreCompleto: string = 'ElEaZaR RaMoS';

  // Para trabajos mayores se recomiendo https://momentjs.com/
  fecha: Date = new Date(); // Día de hoy

}
