import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        PrimeNgUIComponentModule
    ]
})
export class AuthModule { }
