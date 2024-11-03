// summarizer.service.ts

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummarizerService {
  private baseUrl = "https://summarized-text-be.onrender.com/api/summarize";
  constructor(private http: HttpClient) { }

  summarizeText(inputText: string,
      userId: string,
      summaryLength: number): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/summarized-text`, {
          text: inputText,
          userId: userId,
          summaryLength: summaryLength
      });
  }

  getSummarizedText(userId: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/summarized-text/${userId}`);
  }

  deleteSummarizedText(textId: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/deleteText/${textId}`);
  }
}
