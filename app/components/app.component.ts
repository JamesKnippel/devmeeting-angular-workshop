import { IProduct, CustomElement } from '../interfaces';
import { el } from '../utils';
import { ProductComponent } from './product.component';

export class AppComponent {
  private showPromoted: boolean = true;

  constructor(private products: IProduct[]) {}

  /**
   * @param product {IProduct}
   * @return {CustomElement}
   */
  renderProduct(product: IProduct): CustomElement {
    const component = new ProductComponent(product);
    return component.render();
  }

  /**
   * Create a parent section element with both `promoted` and `regular`
   * container sections
   * @return {CustomElement}
   */
  render(): CustomElement {
    return el('div',
      this.showPromoted ?
        el('section',
          el('h2', 'Promoted Products'),
            ...this.products.filter(product => product.promoted)
              .map(this.renderProduct)
        ) : null,

      el('section',
        el('h2', 'Regular Products'),
          ...this.products.filter(product => !product.promoted)
            .map(this.renderProduct)
      )
    );
  }

  togglePromoted(): void {
    this.showPromoted = !this.showPromoted;
  }
}