import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardPage } from './leaderboard/leaderboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // BrowserModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardPage, LeaderboardPage]
})
export class DashboardPageModule {}
