import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
