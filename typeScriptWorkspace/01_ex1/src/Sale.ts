import { Customer } from "./Customer";
import { Product } from "./Product";

export class Sale {
  private _code: number;
  private _data: string;
  private _customer: Customer;
  private _products: Product[];

  constructor(code: number, data: string, customer: Customer, products: Product[]) {
    this._code = code;
    this._data = data;
    this._customer = customer;
    this._products= products;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  calculateTotal(): number {
    return this._products.reduce((total, p) => total + p.value, 0);
  }
}