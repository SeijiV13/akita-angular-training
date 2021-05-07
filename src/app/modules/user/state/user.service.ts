import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { UserStore } from './user.store';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;

  constructor(private http: HttpClient, private userStore: UserStore) { }

  setSelectedUser(user: User) {
     this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.url}/users`).pipe(
      tap((data: User[]) => {
        this.userStore.loadUsers(data, true);
      }),
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
      tap((data: User) => {
        this.userStore.addUser(data);
      }),
      catchError((error) => throwError(`${error}`))
    )
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${environment.url}/users/${user.id}`, user).pipe(
      tap((data: User) => {
        this.userStore.replace(user.id, data);
      }),
      catchError((error) => throwError(`${error}`))
    )
  }

  deleteUser(id: ID): Observable<User> {
    return this.http.delete(`${environment.url}/users/${id}`).pipe(
      tap((data: User) => {
        this.userStore.remove(id);
      }),
      catchError((error) => throwError(`${error}`))
    )
  }
}
