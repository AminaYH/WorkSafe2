import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalenderComponent } from './calender.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CalenderComponent }
    ])],
    exports: [RouterModule]
})
export class CalenderRoutingModule { }
