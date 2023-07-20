import { Component } from '@angular/core';
import { LayoutService } from 'src/app/employee/layout/service/app.layout.service';
import {Employee} from "../../../api/users";
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent  {

    valCheck: string[] = ['remember'];

    password!: string;
    employee:Employee ={ };

    constructor(public layoutService: LayoutService , public loginService : LoginService,public router:Router) { }


    login():void
    {
        this.loginService.login(this.employee).subscribe(data=>
        this.router.navigate(['/dashboard']))
    }
}
