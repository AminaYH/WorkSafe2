import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {UsersService} from "../../shared/service/users.service";
import {GENERIC_ERROR_MESSAGE} from "../../shared/api/app.messages";
import {Rol, Employee} from "../../shared/api/users";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {
    employees: Employee[]=[];

    constructor(private employeeService:UsersService,
                private router: Router) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    private getEmployees(){
        this.employeeService.getAllEmployees().subscribe(data => {
            this.employees = data;
        });
    }

    employeeDetails(id: number){
        this.router.navigate(['employee-details', id]);
    }

    updateEmployee(id: number){
        this.router.navigate(['update-employee', id]);
    }

    deleteEmployee(id: number){
        this.employeeService.deleteEmployee(id).subscribe( data => {
            console.log(data);
            this.getEmployees();
        })
    }

    showDialog() {
        this.employeeService.displayDialog = true;

    }
}
