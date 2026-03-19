import { Address } from "./Address";
import { Phone } from "./Phone";

export class Customer {
  private _name: string;
  private _cpf: string;
  private _birthDate: string;
  private _genre: string;
  private _address: Address;
  private _phone: Phone[];

  constructor(
    name: string,
    cpf: string,
    birthDate: string,
    genre: string,
    address: Address,
    phone: Phone[]
  ) {
    this._name = name;
    this._cpf = cpf;
    this._birthDate = birthDate;
    this._genre = genre;
    this._address = address;
    this._phone = phone;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(value: string) {
    this._birthDate = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get phone(): Phone[] {
    return this._phone;
  }

  set phone(value: Phone[]) {
    this._phone = value;
  }
}