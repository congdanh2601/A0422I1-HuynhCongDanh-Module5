import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductModule} from "./product_manager/product/product.module";
import {CategoryModule} from "./product_manager/category/category.module";


@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProductModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
