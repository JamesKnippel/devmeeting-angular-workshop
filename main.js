'use strict';

/**
 * @name Vanilla JavaScript (Task 1)
 * @description Using Vanilla JS and raw DOM operations to display single product tile
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

const product = {
  name: 'Vanilla JavaScript (ES6)',
  description: 'JavaScript is the best framework!',
  price: 0
};

// create a component instance
const component = new ProductComponent(product);

// append product component instance to DOM
document.body.appendChild(component.render());

