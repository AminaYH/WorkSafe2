import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import {UsersDialogComponent} from "../users-dialog/users-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    imports: [
        CommonModule,
        CrudRoutingModule,
        PrimeNgUIComponentModule,ReactiveFormsModule,HttpClientModule
    ],
    declarations: [CrudComponent,
        UsersDialogComponent ],
    exports: [
        UsersDialogComponent
    ],
})
export class CrudModule { }
