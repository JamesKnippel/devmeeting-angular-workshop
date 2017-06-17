import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';

export { IProduct } from './interfaces';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
