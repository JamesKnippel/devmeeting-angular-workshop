import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IProduct, ISortOptions } from './app.module';
import { ProductsJSONService } from './services/products.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular4 Http and RxJS';
  public products: Array<IProduct> = [];
  public sort: ISortOptions = {
    property: 'price',
    reverse: false
  };
  public predicate: string = '';

  constructor(private productsService: ProductsJSONService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Array<IProduct>) => {
      this.products = data;
    });
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
