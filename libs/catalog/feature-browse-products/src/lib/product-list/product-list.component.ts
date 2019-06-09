import { Component } from '@angular/core';
import { Product, ProductService } from '@myworkspace/catalog/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Observable<Product[]>;

  constructor(productService: ProductService) { 
    this.products = productService.getProducts();
  }

}
