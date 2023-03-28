import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppConfigComponent } from './app.config.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';

@NgModule({
    imports: [
        CommonModule,
        PrimeNgUIComponentModule
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
