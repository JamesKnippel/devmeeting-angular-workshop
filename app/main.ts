import { IProduct } from './interfaces';
import { createElement, el } from './utils';
import { AppComponent } from './components/app.component';

console.log('TypeScript basics 3 (Add a toggle button)');

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
let appRoot = createElement(app.render());

// Create a toggle button
const toggleButton = createElement(el('button', 'Toggle Promoted'));

document.body.appendChild(toggleButton); // add toggle button to the body
document.body.appendChild(appRoot); // add appRoot to the body


// attach event listener to button when it clicks
document.querySelector('button').addEventListener('click', () => {

  // remove everything except toggle button
  document.body.removeChild(appRoot);

  // reset `showPromoted` status
  app.togglePromoted();

  // re-create appRoot element
  appRoot = createElement(app.render());

  // re-render our app component
  document.body.appendChild(appRoot);
});
