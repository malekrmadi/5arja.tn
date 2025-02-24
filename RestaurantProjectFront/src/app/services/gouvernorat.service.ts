import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gouvernorat } from '../models/gouvernorat'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {

  private baseUrl = 'http://localhost:8080/gouvernorats'; // Update this URL if needed

  constructor(private http: HttpClient) { }

  // Create a new Gouvernorat
  createGouvernorat(gouvernorat: Gouvernorat): Observable<Gouvernorat> {
    return this.http.post<Gouvernorat>(`${this.baseUrl}`, gouvernorat);
  }

  // Get all Gouvernorats
  getAllGouvernorats(): Observable<Gouvernorat[]> {
    return this.http.get<Gouvernorat[]>(`${this.baseUrl}`);
  }

  // Get Gouvernorat by ID
  getGouvernoratById(id: number): Observable<Gouvernorat> {
    return this.http.get<Gouvernorat>(`${this.baseUrl}/${id}`);
  }

  // Delete a Gouvernorat by ID
  deleteGouvernorat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
