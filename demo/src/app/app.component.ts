import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IProduct, ISortOptions } from './app.module';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular4 Services and Dependency Injection';
  public products: Array<IProduct> = [];
  public sort: ISortOptions = {
    property: 'price',
    reverse: false
  };
  public predicate: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onSearch(predicate: string): void {
    this.predicate = predicate;
  }

  onSort(sortBy: string): void {
    this.sort = {
      property: sortBy,
      reverse: !this.sort.reverse
    };
  }
}
