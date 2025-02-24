import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userMessage: string = '';
  chatHistory: { sender: string, message: string, sqlQuery?: string }[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      // Add user message to chat history
      this.chatHistory.push({ sender: 'User', message: this.userMessage });
      this.loading = true;
      this.errorMessage = null;

      // Call the service to send the message along with the history
      this.chatService.sendMessage(this.userMessage, this.chatHistory).subscribe({
        next: (response) => {
          // Add bot's SQL query and response to the chat history
          this.chatHistory.push({ 
            sender: 'Bot', 
            message: response.response,
            sqlQuery: response.sql_query // Include SQL query in chat history
          });
          this.loading = false;
          this.userMessage = ''; // Reset the input field
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = 'Error occurred while fetching response.';
        }
      });
    }
  }
}
