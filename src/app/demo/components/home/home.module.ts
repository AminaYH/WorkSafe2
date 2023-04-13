import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {PrimeNgUIComponentModule} from "../../../shared/modules/primeng-ui-component.module";


@NgModule({
  declarations: [
      HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PrimeNgUIComponentModule

    ]
})
export class HomeModule { }
