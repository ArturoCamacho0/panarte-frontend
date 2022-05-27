import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/Material';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  url: string = environment.apiUrl + 'materials/';
  headers: HttpHeaders;
  token: string | null = '';

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json'
    });
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.url, { headers: this.headers });
  }

  getMaterial(id: number): Observable<Material> {
    return this.http.get<Material>(this.url + id, { headers: this.headers });
  }

  createMaterial(material: Material) {
    return this.http.post(this.url, material, { headers: this.headers });
  }

  updateMaterial(material: Material, id: number) {
    return this.http.put(this.url + id, material, { headers: this.headers });
  }

  deleteMaterial(id: number) {
    return this.http.delete(this.url + id, { headers: this.headers });
  }
}
