import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://127.0.0.1:8000/chat';  // L'URL de votre API Flask

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer une question et obtenir une réponse
  sendMessage(question: string, history: { sender: string, message: string }[]): Observable<any> {
    // Send the question along with the chat history
    return this.http.post<any>(this.apiUrl, { question, history });
  }
}
