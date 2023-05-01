import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PrimeNgUIComponentModule} from "src/app/shared/modules/primeng-ui-component.module";


@NgModule({
    declarations: [
        AdminComponent

    ],

    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        PrimeNgUIComponentModule
    ]
})
export class AdminModule { }
