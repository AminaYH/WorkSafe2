import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';


@NgModule({
    imports: [
        CommonModule,
        CrudRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [CrudComponent]
})
export class CrudModule { }
