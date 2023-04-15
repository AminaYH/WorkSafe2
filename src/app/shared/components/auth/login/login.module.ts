import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
