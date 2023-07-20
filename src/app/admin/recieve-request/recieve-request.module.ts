import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieveRequestRoutingModule } from './recieve-request-routing.module';
import { RecieveRequestComponent } from './recieve-request.component';
import {PrimeNgUIComponentModule} from "../../shared/modules/primeng-ui-component.module";


@NgModule({
  declarations: [

  ],
    imports: [
        CommonModule,
        RecieveRequestRoutingModule,
        PrimeNgUIComponentModule
    ]
})
export class RecieveRequestModule { }
