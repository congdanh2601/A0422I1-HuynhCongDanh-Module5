import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAllFromHttp().subscribe(next => {
      this.categories = next;
    });
  }

  delete(id: number) {
    this.categoryService.deleteCategoryFromHttp(id);
    this.getAll();
  }
}
