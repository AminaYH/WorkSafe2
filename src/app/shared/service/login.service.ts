import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../api/users';
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import * as Http from "http";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class LoginService {
    displayDialog: boolean = false;

    public employees: Employee[]=[];
    private baseURL = "http://localhost:8084/employee";

    constructor(private httpClient: HttpClient) { }

    login(fromClient: Employee): Observable<Employee>{
        return this.httpClient.post<Employee>(`${this.baseURL}/login`, fromClient);
    }

 }
