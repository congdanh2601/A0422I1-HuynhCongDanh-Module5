import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {CategoryCreateComponent} from "./components/category-create/category-create.component";


const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
