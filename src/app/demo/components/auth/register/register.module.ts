import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule { }
