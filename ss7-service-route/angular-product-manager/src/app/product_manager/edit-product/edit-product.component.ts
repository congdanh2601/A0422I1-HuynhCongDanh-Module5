import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = null;

  productForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        console.log(id);
        this.product = this.productService.findById(parseInt(id));
        console.log(this.product)
      }
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  update() {
    console.log(this.product);
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product);
    this.router.navigate(['product/list']);
  }

}
