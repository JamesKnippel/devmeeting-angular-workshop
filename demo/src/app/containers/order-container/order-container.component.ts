import { Component, ViewEncapsulation } from '@angular/core';
import { IOrder } from '../../interfaces';

@Component({
  selector: 'order-container-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-container.component.html'
})
export class OrderContainerComponent {
  onOrder(order: IOrder): void {
    console.log(`%cOrder Form: ${JSON.stringify(order, null, 4)}`, 'color:black; font-size:large;');
  }
}