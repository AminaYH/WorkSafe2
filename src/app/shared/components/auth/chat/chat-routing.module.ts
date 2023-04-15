import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from "./chat.component";


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ChatComponent }
    ])],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
