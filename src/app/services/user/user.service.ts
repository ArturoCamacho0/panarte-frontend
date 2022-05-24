import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + 'users/';
  private headers: HttpHeaders;
  private token: string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
  }

  login(email: string, password: string): Observable<any> {
    const data = {
      email: email,
      password: password
    };

    return this.http.post(environment.apiUrl + 'login', data, { headers: this.headers });
  }
}
