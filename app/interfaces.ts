export interface IProduct {
  name: string;
  description: string;
  price: number;
  promoted?: boolean;
}

export type CustomElement = string | { tagName: string, children: CustomElement[] };
