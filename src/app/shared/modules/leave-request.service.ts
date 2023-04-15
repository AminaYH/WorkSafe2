import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from 'src/app/shared/api/leave-request.model';

@Injectable({
    providedIn: 'root'
})
export class LeaveRequestService {
    private apiBaseUrl = 'http://localhost:3000'; // your backend API base URL

    constructor(private http: HttpClient) { }

    getApprovedRequests(): Observable<LeaveRequest[]> {
        return this.http.get<LeaveRequest[]>(`${this.apiBaseUrl}/leave-requests?status=approved`);
    }
}
