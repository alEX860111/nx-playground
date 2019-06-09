import { Product } from './product';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly products = [
    { id: 1, name: 'iphone', price: 799 },
    { id: 2, name: 'razr', price: 459 },
    { id: 3, name: 's9', price: 699 }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number | string) {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === +id))
    );
  }

}
