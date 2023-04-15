import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { leaderboardComponent } from 'src/app/admin/layout/LEADERBOARD/leaderboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: leaderboardComponent }
    ])],
    exports: [RouterModule]
})
export class leaderboardRoutingModule { }
