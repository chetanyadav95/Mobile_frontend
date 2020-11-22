import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoTradingPageRoutingModule } from './demo-trading-routing.module';

import { DemoTradingPage } from './demo-trading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoTradingPageRoutingModule
  ],
  declarations: [DemoTradingPage]
})
export class DemoTradingPageModule {}
