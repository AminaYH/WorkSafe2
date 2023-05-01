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
export class UsersService {
    displayDialog: boolean = false;

    public employees: Employee[]=[];
    private baseURL = "http://localhost:8084/api/v1/employees";

    constructor(private httpClient: HttpClient) { }

    getAllEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }

    createEmployee(employee: Employee): Observable<Object>{
        return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
    }

    getEmployeeById(id: number): Observable<Employee>{
        return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }

    updateEmployee(id: number, employee: Employee): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}/${id}`, employee);
    }

    deleteEmployee(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }}
