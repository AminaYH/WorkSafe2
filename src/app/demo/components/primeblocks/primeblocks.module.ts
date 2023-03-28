import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks/blocks.component';
import { PrimeBlocksRoutingModule } from './primeblocks-routing.module';
import { BlockViewerComponent } from './blockviewer/blockviewer.component'
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';


@NgModule({
    imports: [
        CommonModule,
        PrimeBlocksRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [BlocksComponent, BlockViewerComponent]
})
export class PrimeBlocksModule { }
