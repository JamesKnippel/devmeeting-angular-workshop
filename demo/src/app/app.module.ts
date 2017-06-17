import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { FilterElementsPipe } from './pipes/filterElements.pipe';
import { SortElementsPipe } from './pipes/sortElements.pipe';

export * from './interfaces';
export * from './utils';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    SearchComponent,
    SortButtonComponent,

    FilterElementsPipe,
    SortElementsPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
