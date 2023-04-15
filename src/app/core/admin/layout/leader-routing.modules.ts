import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LeaderComponent } from "src/app/core/admin/layout/leader.component";
import {HomeComponent} from "../../../demo/components/home/home.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LeaderComponent }
    ])],
    exports: [RouterModule]
})
export class LeaderRoutingModules {
}
