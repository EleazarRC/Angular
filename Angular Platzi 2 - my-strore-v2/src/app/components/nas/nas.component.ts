import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nas',
  templateUrl: './nas.component.html',
  styleUrls: ['./nas.component.scss']
})
export class NasComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe( products => {
      this.counter = products.length;
    })
  }

  toggeMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
