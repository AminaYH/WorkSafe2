import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../api/users';
import {catchError, Observable, throwError} from "rxjs";
import {LeaveRequest} from "../api/LeaveRequest";


@Injectable(
    {
        providedIn: 'root',
    }
)
export class LeaveRequestService {

    private baseURL = "http://localhost:8084/Leave";

    constructor(private httpClient: HttpClient) { }

    getAllLeaveRequest(): Observable<LeaveRequest[]>{
        return this.httpClient.get<LeaveRequest[]>(`${this.baseURL}/leaverequest`);
    }

    createLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest>{
        return this.httpClient.post<LeaveRequest>(`${this.baseURL}/addLeave`, leaveRequest);
    }}


