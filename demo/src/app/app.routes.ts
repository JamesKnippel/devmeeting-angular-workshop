import { Routes } from '@angular/router';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';
import { ProductDetailsContainerComponent } from './containers/product-details-container/product-details-container.component';
import { OrderContainerComponent } from './containers/order-container/order-container.component';

export const ROUTES: Routes = [
  { path: '',             component: ProductsContainerComponent       },
  { path: 'order',        component: OrderContainerComponent          },
  { path: 'products/:id', component: ProductDetailsContainerComponent }
];