// https://platzi.com/clases/1869-typescript/27967-mi-primer-proyecto-typescript/
// https://platzi.com/cursos/typescript-angular/
const username: string = 'Eleazar';

const sum = ( a:number, b: number ): number => a + b

sum( 1, 1 );

class Person {
  constructor( private age:number, lastName: string ) {
  }
}
const eleazar = new Person( 37, "Ramos");
//eleazar.age;
