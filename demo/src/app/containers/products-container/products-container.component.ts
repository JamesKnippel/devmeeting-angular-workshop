import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { IProduct, ISortOptions, IProductService } from '../../app.module';
import { ProductsServiceToken } from '../../services/products.service';

@Component({
  selector: 'products-container-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './products-container.component.html'
})
export class ProductsContainerComponent implements OnInit {
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
}
