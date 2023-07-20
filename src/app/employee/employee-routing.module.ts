import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee.component";


@NgModule({
imports: [RouterModule.forChild([
        {path:'',component:EmployeeComponent, }

    ]
)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
