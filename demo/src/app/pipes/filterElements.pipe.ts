import { Pipe, PipeTransform } from '@angular/core';
import { IProduct, filterItems } from '../app.module';

@Pipe({ name: 'filterElements' })
export class FilterElementsPipe implements PipeTransform {
  transform(items: Array<IProduct>, predicate: string): Array<IProduct> {
    return filterItems(items, predicate);
  };
}