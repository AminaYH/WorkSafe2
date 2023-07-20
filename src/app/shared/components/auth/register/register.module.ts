import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import {UsersService} from "../../../service/users.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../../api/users";

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {

}
