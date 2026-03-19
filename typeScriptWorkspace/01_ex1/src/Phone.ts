export class Phone {
  private _ddd: string;
  private _phnumber: number;
  private _type: string;

  constructor(ddd: string, phnumber: number, type: string) {
    this._ddd = ddd;
    this._phnumber = phnumber;
    this._type = type;
  }

  get ddd(): string {
    return this._ddd;
  }

  set ddd(value: string) {
    this._ddd = value;
  }

  get phumber(): number {
    return this._phnumber;
  }

  set phnumber(value: number) {
    this._phnumber = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}