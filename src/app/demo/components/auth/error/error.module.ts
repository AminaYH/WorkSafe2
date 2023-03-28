import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [ErrorComponent]
})
export class ErrorModule { }
