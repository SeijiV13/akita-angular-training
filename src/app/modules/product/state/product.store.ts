
import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';
import { Product } from './product.model';
import { Injectable } from '@angular/core';


export interface ProductState extends EntityState<Product> {
  areProductsLoaded: boolean;
}

export function createInitialState(): EntityState<Product> {
  return {
    areProductsLoaded: false
  }
}

@Injectable({ providedIn: 'root'})
@StoreConfig({ name: 'product'})
export class ProductStore extends EntityStore<ProductState, Product> {
   constructor() {
     super(createInitialState())
   }

   loadProduct(products: Product[], loaded: boolean) {
     this.set(products);
     this.update(state => ({
       ...state,
       areProductsLoaded: true
     }));
   }
}
