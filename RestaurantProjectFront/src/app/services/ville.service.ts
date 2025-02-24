import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ville } from '../models/ville'; // Adjust path as necessary

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseUrl = 'http://localhost:8085/villes'; // Update with your API base URL if different

  constructor(private http: HttpClient) { }

  // Create a new Ville
  createVille(ville: Ville): Observable<Ville> {
    return this.http.post<Ville>(`${this.baseUrl}`, ville);
  }

  // Get all Villes
  getAllVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${this.baseUrl}`);
  }

  // Get Ville by ID
  getVilleById(id: number): Observable<Ville> {
    return this.http.get<Ville>(`${this.baseUrl}/${id}`);
  }

  // Update an existing Ville
  updateVille(id: number, ville: Ville): Observable<Ville> {
    return this.http.put<Ville>(`${this.baseUrl}/${id}`, ville);
  }

  // Delete a Ville by ID
  deleteVille(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
