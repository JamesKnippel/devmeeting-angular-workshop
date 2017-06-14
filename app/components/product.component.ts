import { IProduct, CustomElement } from '../interfaces';
import { el } from '../utils';

export class ProductComponent {
  constructor(private product: IProduct) {}

  /**
   * Render a single product tile with given a product's name, description and price
   * @return {CustomElement}
   */
  render(): CustomElement {
    return el('div',
      el('h3', this.product.name),
      el('p', this.product.description),
      el('span', `$${this.product.price}`)
    );
  }
}