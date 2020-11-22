import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoTradingPage } from './demo-trading.page';

const routes: Routes = [
  {
    path: '',
    component: DemoTradingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoTradingPageRoutingModule {}
