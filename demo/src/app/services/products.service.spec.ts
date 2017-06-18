import { TestBed } from '@angular/core/testing';
import { ProductsInMemoryService } from './products.service';
import { IProductService, IProduct } from '../app.module';
import { Observable } from 'rxjs/Observable';

class Product<IProduct> {}

describe('ProductsInMemoryService', () => {
  let service: IProductService;

  beforeEach(() => {
    let injector = TestBed.configureTestingModule({
      providers: [ProductsInMemoryService]
    });
    service = injector.get(ProductsInMemoryService);
  });

  describe('getProducts()', () => {
    let result: Observable<IProduct[]>;

    it('should return an Observable<IProduct[]>', () => {
      result = service.getProducts();
      expect(result instanceof Observable).toBeTruthy();
    });

    it('should should return 6 products', () => {
      result.subscribe((products: IProduct[]) => {
        expect(products.length).toEqual(6);
      });
    });
  });

  describe('getProductById()', () => {
    let product: Observable<IProduct>;

    it('should return a product detail by passing a valid id as an observable instance', () => {
      product = service.getProductById(1);
      expect(product instanceof Observable).toBeTruthy();
    });

    it('should return a <Product> instance', () => {
      product.subscribe(product => {
        expect(product instanceof Product);
      });
    });

    it('should not return a product instance by passing a invalid id', () => {
      product = service.getProductById(0);
      product.subscribe(p => {
        expect(p).toBeUndefined();
      });
    });
  });
});