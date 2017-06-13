'use strict';

/**
 * @name Vanilla JavaScript (Task 3)
 * @description Add a list of promoted product above the regular products from previous task
 */
class ProductComponent {
  constructor(product) {
    this.product = product;
  }

  render() {
    // create a product container element
    const productContainer = document.createElement('div');
    // create a name element
    const name = document.createElement('h3');
    // create a description element
    const description = document.createElement('p');
    // create a price element
    const price = document.createElement('span');

    name.textContent = this.product.name;
    description.textContent = this.product.description;
    price.textContent = `$${this.product.price}`;

    productContainer.appendChild(name);
    productContainer.appendChild(description);
    productContainer.appendChild(price);

    return productContainer;
  }
}

// List of our products (promoted + regular)
const products = [
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

// render each product with given parent element
function renderProduct(parentElement) {
  return (product) => {
    const component = new ProductComponent(product);
    parentElement.appendChild(component.render());
  }
}

// Get parent elements for both `promoted` and `regular` product lists
const promotedProductsElement = document.querySelector('#promoted-products');
const regularProductsElement = document.querySelector('#regular-products');

// render `promoted` products
products.filter(product => product.promoted).forEach(renderProduct(promotedProductsElement));

// render `regular` products
products.filter(product => !product.promoted).forEach(renderProduct(regularProductsElement));






