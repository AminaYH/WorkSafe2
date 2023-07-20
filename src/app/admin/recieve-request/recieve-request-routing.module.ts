import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecieveRequestComponent} from "./recieve-request.component";


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RecieveRequestComponent }
    ])],
    exports: [RouterModule]
})
export class RecieveRequestRoutingModule { }
