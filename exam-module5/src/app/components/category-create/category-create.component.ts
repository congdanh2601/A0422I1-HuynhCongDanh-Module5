import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  form: FormGroup;
  products: Product[] = [];
  notValid: boolean = false;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern("^LH-[0-9]{4}$")]),
      product: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      importDate: new FormControl('', [Validators.required]),
      exportDate: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', Validators.required)
    }, this.confirmDate);
    productService.getAll().subscribe(next => this.products = next)
  }


  ngOnInit(): void {
  }

  confirmDate(form: any) {
    let importDate = form.controls.importDate.value;
    let exportDate = form.controls.exportDate.value
    let expireDate = form.controls.expireDate.value
    if (exportDate < importDate && importDate < expireDate) {
      return null;
    } else return {'invalidDate': true};
  }

  submit() {
    let category: Category = {
      id: this.form.controls.id.value,
      amount: this.form.controls.amount.value,
      product: this.form.controls.product.value,
      expireDate: this.form.controls.expireDate.value,
      importDate: this.form.controls.importDate.value,
      exportDate: this.form.controls.exportDate.value
    }
    if(this.form.valid) {
      this.notValid = false;
      this.categoryService.saveCategory(category).subscribe(() => {
      }, error => {
        console.log(error)
      }, () => {this.router.navigateByUrl("")});
    } else this.notValid = true;
  }
}
