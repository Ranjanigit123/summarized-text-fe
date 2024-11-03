// auth.service.ts

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'https://summarized-text-be.onrender.com/api/auth';
    constructor(private httpClient: HttpClient) { }

    register(userData: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/register`,
            userData);
    };

    login(credentials: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/login`,
            credentials);
    };

    loggedInEvent: EventEmitter<any> = new EventEmitter();
    emitLoggedInEvent() {
        this.loggedInEvent.emit();
    }
}
