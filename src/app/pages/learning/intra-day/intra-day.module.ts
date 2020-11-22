import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntraDayPageRoutingModule } from './intra-day-routing.module';

import { IntraDayPage } from './intra-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntraDayPageRoutingModule
  ],
  declarations: [IntraDayPage]
})
export class IntraDayPageModule {}
