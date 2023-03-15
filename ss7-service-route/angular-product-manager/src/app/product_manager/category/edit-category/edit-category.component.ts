import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      this.categoryService.findByIdFromHttp(id).subscribe(next => {
        this.category = next;
        this.categoryForm = new FormGroup({
          id: new FormControl(this.category.id),
          name: new FormControl(this.category.name)
        })
      });
    });
  }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    });
  }

  getCategory(id) {
    return this.categoryService.findByIdFromHttp(id);
  }

  updateCategory(id) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategoryToHttp(category).subscribe(() => {
      alert("Cập nhật thành công");
      this.router.navigateByUrl("category/list");
    });
  }
}
