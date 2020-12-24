import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuySellPage } from './buy-sell/buy-sell.page';

import { WatchlistPage } from './watchlist.page';

const routes: Routes = [
  {
    path: '',
    component: WatchlistPage,
    children:[
    ]
  },

  {
    path:'buy-sell/:id', 
    component: BuySellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchlistPageRoutingModule {}
