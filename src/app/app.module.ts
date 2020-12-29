import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CommonModule } from '@angular/common';
import { ModalWatchlistComponent } from './modals/modal-watchlist/modal-watchlist.component';
import { ModalWatchlistCeComponent } from './modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { FormsModule } from '@angular/forms';
import { BuySellModalPopupComponent } from './modals/buy-sell-modal-popup/buy-sell-modal-popup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
 
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
 
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop'
import { ModalEditWatchlistsComponent } from './modals/modal-edit-watchlists/modal-edit-watchlists.component';
import { ModalEditOrderComponent } from './modals/modal-edit-order/modal-edit-order.component';
import { ModalChangePasswordComponent } from './modals/modal-change-password/modal-change-password.component';
import { ModalWithdrawAddFundsComponent } from './modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent, 
    ModalWatchlistComponent,
    ModalWatchlistCeComponent,
    BuySellModalPopupComponent,
    ModalEditWatchlistsComponent,
    ModalEditOrderComponent,
    ModalChangePasswordComponent,
    ModalWithdrawAddFundsComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    SuperTabsModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    NgxChartsModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [ environment.apiUrl],
        disallowedRoutes: [environment.apiUrl+"auth"],
      },
    }),
    BrowserAnimationsModule,
  ],
  exports:[
  ],
  providers: [
    Camera,
    File,
    WebView,
    StatusBar,
    SplashScreen,
    FilePath,
    Clipboard,
    SocialSharing,
    GooglePlus,
    Storage,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
