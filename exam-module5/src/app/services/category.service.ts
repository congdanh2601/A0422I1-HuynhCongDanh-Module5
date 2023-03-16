import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories");
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>("http://localhost:3000/categories/", category);
  }

  findById(id): Observable<Category> {
    return this.httpClient.get<Category>("http://localhost:3000/categories/" + id);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>("http://localhost:3000/categories/" + category.id, category)
  }

  deleteCategory(id): Observable<Category> {
    return this.httpClient.delete<Category>("http://localhost:3000/categories/" + id);
  }

  searchCategory(searchInput?: string, expireDate?: string, from?: string, to?:string): Observable<Category[]> {
    let url = "http://localhost:3000/categories?product.name_like="+searchInput.trim();
    if (expireDate != "") {
      url += "&expireDate=" + expireDate;
    }
    if (from != "") {
      url += "&importDate_gte=" + from;
    }
    if (to != "") {
      url += "&importDate_lte=" + to;
    }
    return this.httpClient.get<Category[]>(""+url);
  }

  searchByExpireDate(expireDate: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories?expireDate="+expireDate);
  }

  paginate(page: number, limit?: number) {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories?_page=" + page + "&_limit=" + limit)
  }

  sort() {
    // GET /posts?_sort=views&_order=asc
    //   GET /posts/1/comments?_sort=votes&_order=asc

  }
}
