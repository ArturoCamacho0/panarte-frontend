export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: string;
  category_id: number;

  constructor(id: number, name: string, price: number, stock: number, status: string, category_id: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.status = status;
    this.category_id = category_id;
  }
}
