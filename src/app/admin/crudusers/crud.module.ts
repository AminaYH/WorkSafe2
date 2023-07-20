import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsersDialogComponent} from "src/app/admin/users-dialog/users-dialog.component";


@NgModule({
    imports: [
        CommonModule,
        CrudRoutingModule,
        PrimeNgUIComponentModule, ReactiveFormsModule, HttpClientModule,
    ],
    declarations: [UsersDialogComponent
         ],
    exports: [
        UsersDialogComponent

    ],
})
export class CrudModule { }
