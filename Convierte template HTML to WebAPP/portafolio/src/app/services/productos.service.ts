import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx } from '../interfaces/productoIdx.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productosIdx: ProductoIdx[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos() {+
    this.http.get<ProductoIdx[]>('https://yarnstore-61847-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
        .subscribe( resp => {
          this.productosIdx = resp;
          this.cargando = false;
        })
  }

  getProducto( id: string){
      return  this.http.get<Producto>(`https://yarnstore-61847-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }

  buscarProducto( termino: string ){


  }
}
