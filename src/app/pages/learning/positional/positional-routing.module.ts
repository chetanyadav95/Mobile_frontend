import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositionalPage } from './positional.page';

const routes: Routes = [
  {
    path: '',
    component: PositionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionalPageRoutingModule {}
