import { Pipe, PipeTransform } from "@angular/core";

// Hay que declararlo en el múdulo en declarations...
@Pipe({
  name : 'vuela'
})
export class VuelaPipe implements PipeTransform {
  transform( value : boolean ): string {
    return value ? 'vuela' : 'no vuela';
  }
}
