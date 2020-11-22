import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningPageRoutingModule } from './learning-routing.module';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { BlogsPage } from './blogs/blogs.page';
import { DemoTradingPage } from './demo-trading/demo-trading.page';
import { IntraDayPage } from './intra-day/intra-day.page';
import { PositionalPage } from './positional/positional.page';
import { TutorialsPage } from './tutorials/tutorials.page';
import { LearningPage } from './learning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [LearningPage, BlogsPage,DemoTradingPage,IntraDayPage,PositionalPage,TutorialsPage]
})
export class LearningPageModule {}
