import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PrimeNgUIComponentModule} from "src/app/shared/modules/primeng-ui-component.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CrudComponent} from "./crudusers/crud.component";
import {RecieveRequestComponent} from "./recieve-request/recieve-request.component";
import {CrudModule} from "./crudusers/crud.module";


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        CrudComponent,
        RecieveRequestComponent


    ],

    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        PrimeNgUIComponentModule,
        CrudModule
    ]
})
export class AdminModule { }
