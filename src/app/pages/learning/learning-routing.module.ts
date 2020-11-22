import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningPage } from './learning.page';

const routes: Routes = [
  {
    path: '',
    component: LearningPage
  },
  {
    path: 'tutorials',
    loadChildren: () => import('./tutorials/tutorials.module').then( m => m.TutorialsPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
  },
  {
    path: 'intra-day',
    loadChildren: () => import('./intra-day/intra-day.module').then( m => m.IntraDayPageModule)
  },
  {
    path: 'positional',
    loadChildren: () => import('./positional/positional.module').then( m => m.PositionalPageModule)
  },
  {
    path: 'demo-trading',
    loadChildren: () => import('./demo-trading/demo-trading.module').then( m => m.DemoTradingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningPageRoutingModule {}
