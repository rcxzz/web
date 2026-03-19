export class Product {
  private _code: number;
  private _descr: string;
  private _value: number;

  constructor(code: number, descr: string, value: number) {
    this._code = code;
    this._descr= descr;
    this._value = value;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get descr(): string {
    return this._descr;
  }

  set descr(value: string) {
    this._descr = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
}