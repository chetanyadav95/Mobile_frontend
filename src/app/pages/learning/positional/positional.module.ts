import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositionalPageRoutingModule } from './positional-routing.module';

import { PositionalPage } from './positional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositionalPageRoutingModule
  ],
  declarations: [PositionalPage]
})
export class PositionalPageModule {}
