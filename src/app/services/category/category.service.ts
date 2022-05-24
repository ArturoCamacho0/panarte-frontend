import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl + 'categories/';
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

  getCategory(id: number) {
    return this.http.get(this.apiUrl + id, { headers: this.headers });
  }

  getCategories() {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }

  createCategory(category: JSON) {
    return this.http.post(this.apiUrl, category, { headers: this.headers });
  }
}
