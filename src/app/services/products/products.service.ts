import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.apiUrl + 'products/';
  headers: HttpHeaders;
  token: string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json'
    });
  }

  getProducts() {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }

  getProduct(id: number) {
    return this.http.get(this.apiUrl + id, { headers: this.headers });
  }

  createProduct(product: Product) {
    return this.http.post(this.apiUrl, product, { headers: this.headers });
  }

  updateProduct(product: Product, id: number) {
    return this.http.put(this.apiUrl + id, product, { headers: this.headers });
  }

  deleteProduct(id: number) {
    return this.http.delete(this.apiUrl + id, { headers: this.headers });
  }
}
