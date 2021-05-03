import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${environment.url}/products`).pipe(
      tap((data: Product[]) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get(`${environment.url}/products/${id}`).pipe(
      tap((data: Product) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(`${environment.url}/products`, product).pipe(
      tap((data: Product) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  updateProduct(id:string, product: Product): Observable<Product> {
    return this.http.put(`${environment.url}/products/${id}`, product).pipe(
      tap((data: Product) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  deleteProduct(id:string): Observable<Product> {
    return this.http.delete(`${environment.url}/products/${id}`).pipe(
      tap((data: Product) => data),
      catchError((error) => throwError(`${error}`))
    )
  }






}
