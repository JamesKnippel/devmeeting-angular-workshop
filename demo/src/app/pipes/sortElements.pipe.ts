import { Pipe, PipeTransform } from '@angular/core';
import { IProduct, ISortOptions, sortItems } from '../app.module';

@Pipe({ name: 'sortElements' })
export class SortElementsPipe implements PipeTransform {
  transform(items: Array<IProduct>, sort: ISortOptions): Array<IProduct> {
    return sortItems(items, sort);
  }
}