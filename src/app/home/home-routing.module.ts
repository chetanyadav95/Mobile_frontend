import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'watchlist',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/watchlist/watchlist.module').then( m => m.WatchlistPageModule)
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/orders/orders.module').then( m => m.OrdersPageModule)
      },
      // {
      //   path: 'chart',
      //   canActivate: [AuthGuard],
      //   loadChildren: () => import('../pages/chart/chart.module').then( m => m.ChartPageModule)
      // },
      {
        path: 'learning',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/learning/learning.module').then( m => m.LearningPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
