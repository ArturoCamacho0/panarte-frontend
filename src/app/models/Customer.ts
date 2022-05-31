export class Customer {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, last_name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
  }
}
