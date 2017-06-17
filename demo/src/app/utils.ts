import { IProduct, IProductPropertyValue, ISortOptions } from './app.module';
import * as _ from 'lodash';

export function toLowerCase(value: string): string {
  return value.toLowerCase();
}

export function getProductValues(product: IProduct): Array<IProductPropertyValue> {
  return Object.keys(product).map((key: string) => product[key]);
}

export function sortItems(items: Array<IProduct>, sortOptions: ISortOptions): Array<IProduct> {
  const sortedItems = _.sortBy(items, sortOptions.property);

  return sortOptions.reverse
    ? sortedItems.reverse()
    : sortedItems;
}

export function filterItems(items: Array<IProduct>, predicate: string): Array<IProduct> {
  return items.filter((p: IProduct) => {
    const values: Array<IProductPropertyValue> = getProductValues(p).map(String).map(toLowerCase);
    return values.some((value: string) => value.includes(predicate.toLowerCase()))
  });
}