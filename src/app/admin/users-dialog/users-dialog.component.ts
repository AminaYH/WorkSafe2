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
    employee:Employee= new Employee();
    submitting: boolean = false;
    userForm: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],

        age: ['', [Validators.required, ]],
        address: ['', [Validators.required]],
        departement: ['', [Validators.required]],


    });

    get name() {
        return this.userForm.get('name');
    }

    get email() {
        return this.userForm.get('email');
    }

    get username() {
        return this.userForm.get('username');
    }

    get address() {
        return this.userForm.get('address');
    }
    get departement() {
        return this.userForm.get('departement');
    }
    get age() {
        return this.userForm.get('age');
    }


    constructor(
        private fb: FormBuilder,
        private message: MessageService,
        public employeeService: UsersService,
        private  router:Router
    ) {}

    isInvalid(controlName: string) {
        const control = this.userForm.get(controlName);
        return control?.invalid && (control?.dirty || control?.touched);
    }

    saveUser(): void {
      this.employeeService.createEmployee(this.employee).subscribe(
          data=>
          {
            console.log('employee',data);
            this.router.navigateByUrl("/crudusers");
          }

      )

    }

    closeDialog() {
        this.employeeService.displayDialog = false;
    }
}
