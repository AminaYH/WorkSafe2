import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { PrimeBlocksRoutingModule } from '../primeblocks/primeblocks-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UtilitiesRoutingModule,
        PrimeBlocksRoutingModule

    ],
    declarations: [IconsComponent]
})
export class UtilitiesModule { }
