import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCategoryComponent} from "./list-category/list-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListCategoryComponent
  },
  {
    path: 'create',
    component: CreateCategoryComponent
  },
  {
    path: 'list/edit/:id',
    component: EditCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
