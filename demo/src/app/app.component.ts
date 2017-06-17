import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IProduct } from './app.module';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular4 Events';
  public products: Array<IProduct> = [];

  private allProducts: Array<IProduct> = [
    {
      name: 'Secrets of the JavaScript Ninja',
      description: `For anyone serious about web development, it's not enough to be a decent JavaScript coder. They need to be ninja-stealthy, efficient, and ready for anything. Secrets of the JavaScript Ninja, Second Edition dives below the surface and helps readers understand the deceptively-complex world of JavaScript and browser-based application development. It skips the basics, and dives into core JavaScript concepts such as functions, closures, objects, prototypes, promises, and so on.`,
      price: 21.77,
      author: 'John Resig, Bear Bibeault, and Josip Maras',
      promoted: false,
      tags: ['Master', 'JavaScript']
    },
    {
      name: 'JavaScript: The Good Parts',
      description: `Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation.`,
      price: 16.26,
      author: 'Douglas Crockford',
      promoted: false,
      tags: ['JavaScript', 'Good Parts']
    },
    {
      name: `You Don't Know JS: Scope & Closures`,
      description: `This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.`,
      price: 15.06,
      author: 'Kyle Simpson',
      promoted: true,
      tags: ['JavaScript', 'Scope', 'Closures']
    },
    {
      name: `You Don't Know JS: this & Object Prototypes `,
      description: `No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise, in-depth guide takes you inside JavaScript’s this structure and object prototypes. You’ll learn how they work and why they’re integral to behavior delegation—a design pattern in which objects are linked, rather than cloned. `,
      price: 18.65,
      author: 'Kyle Simpson',
      promoted: true,
      tags: ['JavaScript', 'Function', 'Object Prototypes']
    },
    {
      name: `You Don't Know JS: ES6 & Beyond`,
      description: `As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built. Like other books in this series, You Don’t Know JS: ES6 & Beyond dives into trickier parts of the language that many JavaScript programmers either avoid or know nothing about. Armed with this knowledge, you can achieve true JavaScript mastery.`,
      price: 17.54,
      author: 'Kyle Simpson',
      promoted: true,
      tags: ['JavaScript', 'ES6', 'ES7']
    },
    {
      name: `The Principles of Object-Oriented JavaScript`,
      description: `If you've used a more traditional object-oriented language, such as C++ or Java, JavaScript probably doesn't seem object-oriented at all. It has no concept of classes, and you don’t even need to define any objects in order to write code. But don’t be fooled—JavaScript is an incredibly powerful and expressive object-oriented language that puts many design decisions right into your hands. In The Principles of Object-Oriented JavaScript, Nicholas C. Zakas thoroughly explores JavaScript’s object-oriented nature, revealing the language’s unique implementation of inheritance and other key characteristics. `,
      price: 16.35,
      author: 'Nicholas C. Zakas',
      promoted: false,
      tags: ['Object-Oriented Design', 'JavaScript']
    },
  ];

  ngOnInit(): void {
    this.products = this.allProducts;
  }

  onSearch(predicate: string): void {
    this.products = this.allProducts.filter((p: IProduct) => p.name.includes(predicate));
  }
}
