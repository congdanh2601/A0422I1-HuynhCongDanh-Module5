import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {element} from "protractor";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category;
  searchForm: FormGroup;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService.paginate(1, 2).subscribe(next => {
      this.categories = next
    })
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchName: new FormControl(''),
      expireDate: new FormControl(''),
      importDateFrom: new FormControl(''),
      importDateTo: new FormControl(''),
    })
  }

  getPage(page, limit) {
    this.categoryService.paginate(page, limit).subscribe(next => this.categories = next);
  }

  delete() {
    this.categoryService.deleteCategory(this.selectedCategory.id).subscribe(() => {
      this.getPage(1, 2);
    })
  }

  search() {
    let searchName = this.searchForm.controls.searchName.value;
    let expireDate = this.searchForm.controls.expireDate.value;
    let importDateFrom = this.searchForm.controls.importDateFrom.value;
    let importDateTo = this.searchForm.controls.importDateTo.value;
    this.categoryService.searchCategory(searchName, expireDate, importDateFrom, importDateTo).subscribe(next => {
      console.log(expireDate);
      this.categories = next;
      console.log(this.categories);
    }, error => {
    },() => {

    })
  }
}
