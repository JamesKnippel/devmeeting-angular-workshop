import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../interfaces';

@Component({
  selector: 'product-list-cmp',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() header: string;
  @Input() products: Array<IProduct>;
}
