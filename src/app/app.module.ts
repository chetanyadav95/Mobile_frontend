import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CommonModule } from '@angular/common';
import { ModalWatchlistComponent } from './modals/modal-watchlist/modal-watchlist.component';
import { ModalWatchlistCeComponent } from './modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { FormsModule } from '@angular/forms';
import { BuySellModalPopupComponent } from './modals/buy-sell-modal-popup/buy-sell-modal-popup.component';

@NgModule({
  declarations: [
    AppComponent, 
    ModalWatchlistComponent,
    ModalWatchlistCeComponent,
    BuySellModalPopupComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    SuperTabsModule.forRoot(),
    CommonModule,
    FormsModule,
  ],
  exports:[
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
