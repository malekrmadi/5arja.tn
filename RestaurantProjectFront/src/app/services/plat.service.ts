import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private baseUrl = 'http://localhost:8085/plats'; // Update this URL if needed

  constructor(private http: HttpClient) { }

  // Create a new Plat
  createPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(`${this.baseUrl}`, plat);
  }

  // Get all Plats
  getAllPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.baseUrl}`);
  }

  // Get Plat by ID
  getPlatById(id: number): Observable<Plat> {
    return this.http.get<Plat>(`${this.baseUrl}/${id}`);
  }

  // Update an existing Plat
  updatePlat(id: number, plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(`${this.baseUrl}/${id}`, plat);
  }

  // Delete a Plat by ID
  deletePlat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
