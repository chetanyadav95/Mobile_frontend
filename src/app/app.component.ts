import { Component, OnInit, ViewChild } from '@angular/core';
import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core'
import { AlertController, Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

const { Network, LocalNotifications, App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet
  networkListener: PluginListenerHandle
  networkStatus: NetworkStatus 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private location: Location,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit(){
    this.initializeApp()
    this.connectionLostEvent()
    this.backButtonEvent()
  }

  connectionLostEvent(){
    this.networkListener = Network.addListener('networkStatusChange', async status => {
      this.networkStatus = status
      if(!this.networkStatus.connected)
        await this.connectionLostNotification()
    })
  }

  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10,() => {
      if(this.router.url == "/home/dashboard")
        this.backButtonAlert()
      else this.location.back()
    })
  }

  async backButtonAlert(){
    const alert = await this.alertController.create({
      message: 'You\'ve just pressed the back button',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Close app',
        handler: () => {
          App.exitApp()
        }
      }]
    })

    await alert.present()
  }

  async connectionLostNotification(){
    await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: 'You\'ve lost internet connection',
        body: 'Any progress accomplished during this time will be lost.'
      }]
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.userService.authenticated.subscribe(a => {
        a ? this.router.navigate(['home', 'dashboard']) : this.router.navigate(['home','login'])
      })
    });
  }
}
