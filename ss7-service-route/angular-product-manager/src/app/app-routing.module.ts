import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {ListProductComponent} from "./product_manager/list-product/list-product.component";
import {CreateProductComponent} from "./product_manager/create-product/create-product.component";
import {EditProductComponent} from "./product_manager/edit-product/edit-product.component";


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
    path: 'product/list',
    component: ListProductComponent
  },
  {
    path: 'product/create',
    component: CreateProductComponent
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
