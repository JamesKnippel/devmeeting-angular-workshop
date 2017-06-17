import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular4 Basics';

  public product = {
    name: 'Secrets of the JavaScript Ninja',
    description: `More than ever, the web is a universal platform for all types of applications, and JavaScript is the language of the web. For anyone serious about web development, it's not enough to be a decent JavaScript coder. They need to be ninja-stealthy, efficient, and ready for anything. Secrets of the JavaScript Ninja, Second Edition dives below the surface and helps readers understand the deceptively-complex world of JavaScript and browser-based application development. It skips the basics, and dives into core JavaScript concepts such as functions, closures, objects, prototypes, promises, and so on. With examples, illustrations, and insightful explanations, readers will benefit from the collective wisdom of seasoned experts John Resig, Bear Bibeault, and Josip Maras. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.`,
    price: 21.77
  };
}
