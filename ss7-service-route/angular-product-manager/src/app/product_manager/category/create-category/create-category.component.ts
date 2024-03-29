import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategoryToHttp(category).subscribe(() => {
      alert('Tạo mới thành công');
      this.router.navigateByUrl("category/list")
    });
  }
}
