import { Component } from '@angular/core';
import { Producto } from './procust.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widtImg = 10;
  name = 'Eleazar';
  age  =  37;
  img  = 'https://source.unsplash.com/random';
  btnDisable = true;
  person = {
    name: 'Eleazar',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newEmoji: string = '';
  products: Producto[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/1.jpg',
      category: 'all'

    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/2.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/3.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/4.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/5.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/1.jpg'
    }
  ]

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: '',
  }
  onRegister(){
    console.log(this.register)
  }


  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  increaseAge(){
    this.person.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  onKeyUp(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji = "";
  }

  deleteEmoji( index: number){
    this.emojis.splice( index, 1 )
  }

}
