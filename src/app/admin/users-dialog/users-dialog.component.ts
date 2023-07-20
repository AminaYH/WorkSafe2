import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/shared/api/users';
import { UsersService } from 'src/app/shared/service/users.service';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {GENERIC_ERROR_MESSAGE} from "../../app.messages";
@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
})
export class UsersDialogComponent {
    employee:Employee={};
    visible: boolean=false;
    constructor(
        public employeeService: UsersService,
        private  router:Router,
        private formBuilder: FormBuilder,
        private http :HttpClient

    ) {}



    saveUser() {
        this.employeeService.displayDialog = false;

        // console.log(this.employee);
        this.employeeService.createEmployee(this.employee).subscribe(
            ( data :any )=>
          {
            console.log('employee',data);
            this.router.navigate(['/crudusers'])


          },


      )

    }


}
