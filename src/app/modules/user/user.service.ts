import { User } from './../../shared/models/user';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.url}/users`).pipe(
      tap((data: User[]) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  getUser(id: string): Observable<User> {
    return this.http.get(`${environment.url}/users/${id}`).pipe(
      tap((data: User) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  addUser(user: User): Observable<User> {
    return this.http.post(`${environment.url}/users`, user).pipe(
      tap((data: User) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  updateUser(id:string, user: User): Observable<User> {
    return this.http.put(`${environment.url}/users/${id}`, user).pipe(
      tap((data: User) => data),
      catchError((error) => throwError(`${error}`))
    )
  }

  deleteUser(id:string): Observable<User> {
    return this.http.delete(`${environment.url}/users/${id}`).pipe(
      tap((data: User) => data),
      catchError((error) => throwError(`${error}`))
    )
  }
}
