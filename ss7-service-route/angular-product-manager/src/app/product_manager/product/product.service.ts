import {Injectable} from '@angular/core';
import {Product} from "./product";
import {element} from "protractor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/products/", product);
  }

  findById(id): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:3000/products/"+id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>("http://localhost:3000/products/"+product.id, product)
  }

  deleteProduct(id): Observable<Product> {
    return this.httpClient.delete<Product>("http://localhost:3000/products/"+id);
  }
}
