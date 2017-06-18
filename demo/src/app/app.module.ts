import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';
import { ProductDetailsContainerComponent } from './containers/product-details-container/product-details-container.component';
import { OrderContainerComponent } from './containers/order-container/order-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { FilterElementsPipe } from './pipes/filterElements.pipe';
import { SortElementsPipe } from './pipes/sortElements.pipe';

import { ProductsJSONService, ProductsServiceToken } from './services/products.service';

import { ROUTES } from './app.routes';

export * from './interfaces';
export * from './utils';
export * from './validators';

@NgModule({
  declarations: [
    AppComponent,

    ProductsContainerComponent,
    ProductDetailsContainerComponent,
    OrderContainerComponent,

    ProductComponent,
    ProductListComponent,
    SearchComponent,
    SortButtonComponent,
    OrderFormComponent,
    NavigationComponent,

    FilterElementsPipe,
    SortElementsPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    {
      provide: ProductsServiceToken,
      useClass: ProductsJSONService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
