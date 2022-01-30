import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [];

  today: Date = new Date();

  constructor(  private storeService: StoreService,
                private productsService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();

   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
                        .subscribe(products => this.products = products);
  }

  onAddToShoppingCard(producto: Product){
    this.storeService.addProduct(producto)
    this.total = this.storeService.getTotal();
  }



}
