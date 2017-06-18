import { Component, ViewEncapsulation } from '@angular/core';
import { IMenuItem } from '../../app.module';

@Component({
  selector: 'navigation-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  public menus: Array<IMenuItem> = [
    { name: 'Products', path: ''      },
    { name: 'Order',    path: 'order' }
  ];
}