import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { IProduct, ISortOptions, IProductService, IOrder} from './app.module';
import { ProductsServiceToken } from './services/products.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular4 Forms';
  public products: Array<IProduct> = [];
  public sort: ISortOptions = {
    property: 'price',
    reverse: false
  };
  public predicate: string = '';

  constructor(@Inject(ProductsServiceToken) private productsService: IProductService) {}

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

  onOrder(order: IOrder): void {
    console.log(`%cOrder Form: ${JSON.stringify(order, null, 4)}`, 'color:black; font-size:large;');
  }
}
