import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartPage } from './chart.page';

const routes: Routes = [
  {
    path: '',
    component: ChartPage
  },
  {
    path: 'tv-chart',
    loadChildren: () => import('./tv-chart/tv-chart.module').then( m => m.TvChartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartPageRoutingModule {}
