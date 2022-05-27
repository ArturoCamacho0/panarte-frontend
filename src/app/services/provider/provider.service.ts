import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/models/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private url: string = environment.apiUrl + 'providers/';
  private headers: HttpHeaders;
  private token: string | null = '';

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json'
    });
  }

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url, { headers: this.headers });
  }

  getProvider(id: number): Observable<Provider> {
    return this.http.get<Provider>(this.url + id, { headers: this.headers });
  }

  createProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.url, provider, { headers: this.headers });
  }

  updateProvider(provider: Provider, id: number): Observable<Provider> {
    return this.http.put<Provider>(this.url + id, provider, { headers: this.headers });
  }

  deleteProvider(id: number): Observable<JSON> {
    return this.http.delete<JSON>(this.url + id, { headers: this.headers });
  }
}
