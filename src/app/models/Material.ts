import { Category } from "./Category";
import { Provider } from "./Provider";

export class Material {
  id: number;
  name: string;
  stock: number;
  status: string;
  category_id: number;
  provider_id: number;
  provider?: Provider;
  category?: Category;

  constructor(id: number, name: string, stock: number, status: string, category_id: number, provider_id: number) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.status = status;
    this.category_id = category_id;
    this.provider_id = provider_id;
  }
}
