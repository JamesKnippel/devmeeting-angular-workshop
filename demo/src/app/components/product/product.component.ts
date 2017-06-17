import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IProduct } from '../../app.module';

@Component({
  selector: 'product-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: IProduct;
}

