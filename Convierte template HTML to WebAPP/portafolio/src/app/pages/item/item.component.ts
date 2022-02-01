import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto!: Producto;
  id!: string;
  constructor(  private route: ActivatedRoute,
                private productoService: ProductosService ) { }

  ngOnInit(): void {

    this.route.params
        .subscribe( parametros => {
          this.productoService.getProducto(parametros['id'])
              .subscribe( producto => {
                this.id = parametros['id']; // seria para poner la imagen correcta....
                this.producto = producto;
                console.log(producto);

              });
        });
  }

}
