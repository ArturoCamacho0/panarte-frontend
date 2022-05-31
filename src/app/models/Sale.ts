import { Customer } from "./Customer";
import { User } from "./User";

export class Sale {
  id: number;
  date: string;
  total: number;
  status: string;
  user_id: number;
  customer_id: number;
  user?: User;
  customer?: Customer;

  constructor(id: number, date: string, total: number, status: string, user_id: number, customer_id: number) {
    this.id = id;
    this.date = date;
    this.total = total;
    this.status = status;
    this.user_id = user_id;
    this.customer_id = customer_id;
  }
}
