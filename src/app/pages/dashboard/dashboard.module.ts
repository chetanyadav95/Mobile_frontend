import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeaderboardPage } from './leaderboard/leaderboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardPage, LeaderboardPage]
})
export class DashboardPageModule {}
