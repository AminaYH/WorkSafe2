import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { leaderboardRoutingModule } from 'src/app/core/admin/layout/LEADERBOARD/leaderboard-routing.modules';
import { PrimeNgUIComponentModule } from 'src/app/shared/modules/primeng-ui-component.module';
import {leaderboardComponent} from "./leaderboard.component";

@NgModule({
    imports: [
        CommonModule,
        leaderboardRoutingModule,
        PrimeNgUIComponentModule
    ],
    declarations: [leaderboardComponent]
})
export class leaderboardModule { }
