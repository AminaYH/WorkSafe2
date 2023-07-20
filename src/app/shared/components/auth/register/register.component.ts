import { Component } from '@angular/core';
import { LayoutService } from 'src/app/employee/layout/service/app.layout.service';
import {Employee} from "../../../api/users";
import {UsersService} from "../../../service/users.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    employee:Employee={};


    constructor(public layoutService: LayoutService,
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
                this.router.navigate(['/dashboard'])

            },


        )

    }
}
