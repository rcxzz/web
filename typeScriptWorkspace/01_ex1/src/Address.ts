export class Address {
  private _street: string;
  private _honumber: number;
  private _city: string;
  private _state: string;

  constructor(street: string, honumber: number, city: string, state: string) {
    this._street = street;
    this._honumber = honumber;
    this._city = city;
    this._state = state;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get honumber(): number {
    return this._honumber;
  }

  set honumber(value: number) {
    this._honumber = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}