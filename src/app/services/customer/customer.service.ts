import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = environment.apiUrl + 'customers/';
  private headers: HttpHeaders;
  private token: string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json'
    });
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, { headers: this.headers });
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + id, { headers: this.headers });
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer, { headers: this.headers });
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url + customer.id, customer, { headers: this.headers });
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.url + id, { headers: this.headers });
  }
}
