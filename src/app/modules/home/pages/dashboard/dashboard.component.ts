import { ProductQuery } from './../../../product/state/product.query';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/state/user.service';
import { User } from 'src/app/modules/user/state/user.model';
import { UserQuery } from 'src/app/modules/user/state/user.query';
import { switchMap } from 'rxjs/operators';
import { UserStore } from 'src/app/modules/user/state/user.store';
import { ProductService } from 'src/app/modules/product/state/product.service';
import { Product } from 'src/app/modules/product/state/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //for products table
  products$: Observable<Product[]>;
  productTableHeaders = ['Name', 'Price', 'Sold'];
  productsProperties = ['name', 'price', 'sold'];

  //for users table
  users$: Observable<User[]>;
  usersTableHeaders = ['Name', 'Gender', 'Bio', 'Active'];
  usersProperties = ['name',  'gender', 'bio', 'active'];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private userQuery: UserQuery,
    private productQuery: ProductQuery,
    private userStore: UserStore,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  getProducts() {
    this.products$ = this.productQuery.selectAreProductsLoaded$.pipe(
      switchMap(loaded => {
        if(!loaded) {
          return this.productService.getProducts();
        }
        return this.productQuery.selectAll()
      })
    )
  }

  getUsers() {
  this.users$ =   this.userQuery.selectAreUsersLoaded$.pipe(
      switchMap(loaded => {
        if(!loaded) {
          return this.userService.getUsers()
        }
        return this.userQuery.selectAll()
      })
    )
    // this.users$ = this.userService.getUsers();
  }

  selectedData(data) {
    console.log(data);
  }

  //actions
  userAction(data: User, action: string) {
     if(action == "view") {
       // service setter
       this.userService.setSelectedUser(data);
       // store
       this.userStore.setActive(data.id);
     }
     this.router.navigate([`user/${action}`]);
  }


}
