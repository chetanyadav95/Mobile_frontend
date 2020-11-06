import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'watchlist',
        loadChildren: () => import('../pages/watchlist/watchlist.module').then( m => m.WatchlistPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'position',
        loadChildren: () => import('../pages/position/position.module').then( m => m.PositionPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../pages/orders/orders.module').then( m => m.OrdersPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/watchlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
