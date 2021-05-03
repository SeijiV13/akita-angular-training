import { Observable } from 'rxjs';
import { ProductService } from './../../../../modules/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { UserService } from 'src/app/modules/user/user.service';
import { User } from 'src/app/shared/models/user';

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
  usersTableHeaders = ['Name', 'Active'];
  usersProperties = ['name', 'active'];

  constructor(
    private productService: ProductService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  getProducts() {
    this.products$ = this.productService.getProducts();
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
  }

  selectedData(data) {
    console.log(data);
  }

}
