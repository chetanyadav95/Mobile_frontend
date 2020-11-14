import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuySellPageRoutingModule } from './buy-sell-routing.module';

import { BuySellPage } from './buy-sell.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    BuySellPageRoutingModule
  ],
  declarations: [BuySellPage]
})
export class BuySellPageModule {}
