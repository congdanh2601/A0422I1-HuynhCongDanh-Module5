import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  categories: Category[]

  constructor(private productService: ProductService, private router: Router,
              private categoryService: CategoryService) {
    categoryService.getAllFromHttp().subscribe(next => {
      this.categories = next
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.router.navigateByUrl("product/list");
    }, error => {

    }, () => { });
  }

}
