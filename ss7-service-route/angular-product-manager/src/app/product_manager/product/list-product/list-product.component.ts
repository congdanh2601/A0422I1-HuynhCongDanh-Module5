import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    productService.getAll().subscribe(next => {
        this.products = next
      },
      error => {

      }, () => {
      });
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.getAll().subscribe(next => this.products = next);
    });
  }

}
