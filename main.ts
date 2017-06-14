/**
 * @name TypeScript Basics (Task 1)
 * @description Prepare TypeScript configuration. Change extension of your `.js` files to `.ts`
 * to check whether code compiles properly.
 *
 * Hints:
 * - Define interfaces and apply interfaces
 * - Add types for classes methods and properties and return types
 */
interface IProduct {
  name: string;
  description: string;
  price: number;
  promoted?: boolean;
}
type CustomElement = string | { tagName: string, children: CustomElement[] };


class ProductComponent {
  constructor(private product: IProduct) {}

  // render a single product tile with given
  // product name, description and product
  render(): CustomElement {
    return el('div',
      el('h3', this.product.name),
      el('p', this.product.description),
      el('span', `$${this.product.price}`)
    );
  }
}

class AppComponent {
  constructor(private products: IProduct[]) {}

  renderProduct(product: IProduct): CustomElement {
    const component = new ProductComponent(product);
    return component.render();
  }

  // create a parent section element with both `promoted` and `regular`
  // container sections
  render(): CustomElement {
    return el('div',
      el('section',
        el('h2', 'Promoted Products'),
        ...this.products
          .filter(product => product.promoted)
          .map(this.renderProduct)
      ),
      el('section',
        el('h2', 'Regular Products'),
        ...this.products
          .filter(product => !product.promoted)
          .map(this.renderProduct)
      )
    );
  }
}

// List of our products (promoted + regular)
const products: IProduct[] = [
  {
    name: 'Vanilla JavaScript',
    description: 'JavaScript is the best framework!',
    price: 0,
    promoted: false
  },
  {
    name: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript compiles to clean, simple JavaScript code which runs on any browser, in Node.js, or in any JavaScript engine that supports ECMAScript 3(or newer)!!',
    price: 128,
    promoted: false
  },
  {
    name: 'Angular4',
    description: 'One framework, Mobile & Desktop. Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target (Web, mobile web, native mobile and native desktop)!!!',
    price: 256,
    promoted: true
  }
];

const app = new AppComponent(products);
document.body.appendChild(createElement(app.render()));



//=========================================================
//  Helpers functions
//---------------------------------------------------------
function createElement(node: CustomElement): HTMLElement | Text {
  if (typeof node === 'string') return document.createTextNode(node);

  const el = document.createElement(node.tagName);

  node.children
    .map(createElement)
    .forEach(child => el.appendChild(child));

  return el;
}

function el(tagName: string, ...children: CustomElement[]): CustomElement {
  return { tagName, children };
}