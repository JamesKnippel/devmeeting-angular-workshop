import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsServiceToken } from '../../services/products.service';
import { IProduct, IProductService } from '../../app.module';

@Component({
  selector: 'product-details-container-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.css']
})
export class ProductDetailsContainerComponent {
  public product: IProduct;

  constructor(
    @Inject(ProductsServiceToken) private productsService: IProductService,
    private route: ActivatedRoute
  ) {
    route.params
      .map((params: Params) => +(params['id']))
      .switchMap((id: number) => this.productsService.getProductById(id))
      .subscribe((product: IProduct) => {
        this.product = product;
      });
  }
}