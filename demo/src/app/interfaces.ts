import { Observable } from 'rxjs/Observable';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  promoted?: boolean;
  author?: string;
  tags?: string[];
}

export type IProductPropertyValue = string | number | boolean | string[];

export interface ISortOptions {
  property: string;
  reverse: boolean;
}

export interface IProductService {
  getProducts(): Observable<Array<IProduct>>;
  getProductById(id: number): Observable<IProduct>
}

export interface IOrder {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  productName: string;
  productQuantity: number;
}

export interface INaturalNumber {
  naturalNumber: boolean;
}

export interface IEmail {
  email: boolean;
}

export type INaturalNumberValidator = INaturalNumber | null;
export type IEmailValidator = IEmail | null;

export interface IMenuItem {
  name: string;
  path: string;
}