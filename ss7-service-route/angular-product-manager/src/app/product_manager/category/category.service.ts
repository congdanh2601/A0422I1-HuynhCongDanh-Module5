import { Injectable } from '@angular/core';
import {Category} from "./category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = []

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.categories;
  }

  getAllFromHttp(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories");
  }

  saveCategory(category) {
    this.categories.push(category);
  }

  saveCategoryToHttp(category): Observable<any> {
    return this.httpClient.post<Category>("http://localhost:3000/categories", category);
  }

  findById(id: number) {
    return this.categories.find(category => category.id === id);
  }

  findByIdFromHttp(id): Observable<Category>{
    return this.httpClient.get("http://localhost:3000/categories/"+id);
  }

  updateCategory(id: number, category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }

  updateCategoryToHttp(category: Category): Observable<any> {
    return this.httpClient.put("http://localhost:3000/categories/"+category.id, category);
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }

  deleteCategoryFromHttp(id: number) {
    return this.httpClient.delete("http://localhost:3000/categories/"+id);
  }
}
