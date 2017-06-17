export interface IProduct {
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