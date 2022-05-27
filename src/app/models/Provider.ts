import { Direction } from "src/app/models/Direction";

export class Provider {
  id: number;
  name: string;
  email: string;
  phone: string;
  direction: Direction;

  constructor(id: number, name: string, email: string, phone: string, direction: Direction) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.direction = direction;
  }
}
