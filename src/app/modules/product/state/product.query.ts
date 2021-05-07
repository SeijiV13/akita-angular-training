
import { Injectable } from "@angular/core";
import { QueryEntity } from '@datorama/akita';
import { ProductState, ProductStore } from './product.store';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductQuery extends QueryEntity<ProductState, Product> {
  constructor(store: ProductStore) {
    super(store);
  }

  selectAreProductsLoaded$ = this.select(state => {
    return state.areProductsLoaded;
  });
}
