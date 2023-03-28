import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BookingComponent }
    ])],
    exports: [RouterModule]
})
export class BookingRoutingModule { }
