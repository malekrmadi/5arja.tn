import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriePlat } from '../models/categorieplat'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class CategorieplatService {

  private baseUrl = 'http://localhost:8085/categorieplats'; // Update this URL if needed

  constructor(private http: HttpClient) { }

  // Create a new CategoriePlat
  createCategoriePlat(categoriePlat: CategoriePlat): Observable<CategoriePlat> {
    return this.http.post<CategoriePlat>(`${this.baseUrl}`, categoriePlat);
  }

  // Get all CategoriePlats
  getAllCategoriePlats(): Observable<CategoriePlat[]> {
    return this.http.get<CategoriePlat[]>(`${this.baseUrl}`);
  }

  // Get CategoriePlat by ID
  getCategoriePlatById(id: number): Observable<CategoriePlat> {
    return this.http.get<CategoriePlat>(`${this.baseUrl}/${id}`);
  }

  // Update CategoriePlat
  updateCategoriePlat(id: number, categoriePlat: CategoriePlat): Observable<CategoriePlat> {
    return this.http.put<CategoriePlat>(`${this.baseUrl}/${id}`, categoriePlat);
  }

  // Delete CategoriePlat by ID
  deleteCategoriePlat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
