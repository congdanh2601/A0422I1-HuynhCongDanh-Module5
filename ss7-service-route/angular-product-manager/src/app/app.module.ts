import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { ListProductComponent } from './product_manager/list-product/list-product.component';
import { CreateProductComponent } from './product_manager/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './product_manager/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
