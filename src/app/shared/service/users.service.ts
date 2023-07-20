import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../api/users';
import {catchError, Observable, throwError} from "rxjs";


@Injectable(
    {
        providedIn: 'root',
    }
)
export class UsersService {
    displayDialog: boolean = false;

    public employees: Employee[]=[];
    private baseURL = "http://localhost:8084/api/v1";

    constructor(private httpClient: HttpClient) { }

    getAllEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
    }

    createEmployee(fromClient: Employee): Observable<Employee>{
        return this.httpClient.post<Employee>(`${this.baseURL}/add`, fromClient);
    }

    getEmployeeById(id: number): Observable<Employee>{
        return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }

    updateEmployee(id: number, employee: Employee): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}/delete/${id}`, employee);
    }

    deleteEmployee(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }}
