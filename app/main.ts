import { IProduct } from './interfaces';
import { createElement } from './utils';
import { AppComponent } from './components/app.component';

console.log('TypeScript basics 2');

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
