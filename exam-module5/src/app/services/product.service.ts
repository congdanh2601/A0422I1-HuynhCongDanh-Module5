import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/products/", product);
  }

  findByName(name): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:3000/categories?name=" + name);
  }
}
