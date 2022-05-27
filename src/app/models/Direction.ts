export class Direction {
  id: number;
  street: string;
  city: string;
  state: string;
  e_number: string;
  i_number: string;
  zip_code: string;

  constructor(id: number, street: string, state: string, city: string, e_number: string, i_number: string, zip_code: string) {
    this.id = id;
    this.street = street;
    this.state = state;
    this.city = city;
    this.e_number = e_number;
    this.i_number = i_number;
    this.zip_code = zip_code;
  }
}
