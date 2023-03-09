import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {ListProductComponent} from "./product_manager/product/list-product/list-product.component";
import {CreateProductComponent} from "./product_manager/product/create-product/create-product.component";
import {EditProductComponent} from "./product_manager/product/edit-product/edit-product.component";


const routes: Routes = [
  {
    path: '',
    component: DictionaryPageComponent
  },
  {
    path: 'detail/:word',
    component: DictionaryDetailComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./product_manager/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./product_manager/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'img-slider',
    loadChildren: () => import('./img-slider/img-slider.module').then(module => module.ImgSliderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
