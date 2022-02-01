import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';




@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule // IMPORTANTE PARA NAVEGAR!!!
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
