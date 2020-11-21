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
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('../pages/chart/chart.module').then( m => m.ChartPageModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('../pages/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
      },
      {
        path: 'learning',
        loadChildren: () => import('../pages/learning/learning.module').then( m => m.LearningPageModule)
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
