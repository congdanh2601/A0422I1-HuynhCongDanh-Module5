import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = null;
  productForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, private categoryService: CategoryService) {
    categoryService.getAllFromHttp().subscribe(next => {
      this.categories = next;
      console.log(this.categories);
      this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id');
        if (id != null) {
          this.productService.findById(id).subscribe(next => {
            this.product = next;
            this.productForm = new FormGroup({
              id: new FormControl(this.product.id),
              name: new FormControl(this.product.name),
              price: new FormControl(this.product.price),
              description: new FormControl(this.product.description),
              category: new FormControl(this.product.category)
            })
          });

        }
      }, error => {

      }, () => {

      });
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  update() {
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product);
    this.router.navigate(['product/list']);
  }

}
