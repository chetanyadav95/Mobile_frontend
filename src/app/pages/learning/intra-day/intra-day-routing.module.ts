import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntraDayPage } from './intra-day.page';

const routes: Routes = [
  {
    path: '',
    component: IntraDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntraDayPageRoutingModule {}
