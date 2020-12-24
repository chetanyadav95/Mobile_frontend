import { TvChartPage } from './tv-chart.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvChartPageRoutingModule } from './tv-chart-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvChartPageRoutingModule
  ],
  declarations: [TvChartPage]
})
export class TvChartPageModule {}
