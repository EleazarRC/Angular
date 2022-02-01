import { Pipe, PipeTransform } from "@angular/core";

// Hay que declararlo en el múdulo en declarations...
@Pipe({
  name : 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  transform( value :string, mayusculas :boolean = true ): string {
    return mayusculas ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
