import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
