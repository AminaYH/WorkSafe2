import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule,
    PrimeNgUIComponentModule
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
