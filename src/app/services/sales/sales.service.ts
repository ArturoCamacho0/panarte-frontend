import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sale } from 'src/app/models/Sale';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private url: string = environment.apiUrl + 'sales/';
  private headers: HttpHeaders;
  private token: string | null;

  public products: Product[] = [];
  private productsInSale = new BehaviorSubject<Product[]>([]);

  productsInSale$ = this.productsInSale.asObservable();

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json'
    });
  }

  addProduct(product: Product) {
    if(this.products.includes(product)){
      this.products = this.products.filter(p => p !== product);
    }else{
      this.products = [...this.products, product];
      this.productsInSale.next(this.products);
    }
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url, { headers: this.headers });
  }

  getSale(id: number): Observable<Sale> {
    return this.http.get<Sale>(this.url + id, { headers: this.headers });
  }

  createSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.url, sale, { headers: this.headers });
  }

  updateSale(sale: Sale): Observable<Sale> {
    return this.http.put<Sale>(this.url + sale.id, sale, { headers: this.headers });
  }

  deleteSale(id: number) {
    return this.http.delete(this.url + id, { headers: this.headers });
  }
}
