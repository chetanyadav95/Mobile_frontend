import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  data = [
    {
      "name": "Open balance",
      "series": [
        {
          "name": "1",
          "value": 0
        },
        {
          "name": "5",
          "value": 150
        },
        {
          "name": "10",
          "value": 250
        },
        {
          "name": "15",
          "value": 510
        },
        {
          "name": "20",
          "value": 720
        },
        {
          "name": "25",
          "value": 680
        },
      ]
    },
    {
      "name": "Init balance",
      "series": [
        {
          "name": "1",
          "value": 500
        },
        {
          "name": "5",
          "value": 500
        },
        {
          "name": "10",
          "value": 500
        },
        {
          "name": "15",
          "value": 500
        },
        {
          "name": "20",
          "value": 500
        },
        {
          "name": "25",
          "value": 500
        },
      ]
    },
  ];

  leaderboard
  user: User
  view = []
  
  constructor(private router: Router, 
    private leaderboardService: LeaderboardService,
    private userService: UserService,
    private platform: Platform,
    private screenOrientation: ScreenOrientation){
  }

  ionViewDidEnter(){
    this.checkIfItIsDashboard()
    this.view = [this.platform.width(),this.platform.height() * 0.6]
    this.screenOrientation.onChange().subscribe(() => this.view = [this.platform.width(),this.platform.height() * 0.5])
    this.leaderboard = this.leaderboardService.leaderboard
    this.userService.authenticated.subscribe(u => {
      this.user = u.user
      this.userService.accountDetails().subscribe((r:any) => {
        this.user.balance.availableBal = parseFloat(r.account.currentBalance)
        this.user.balance.openBal = parseFloat(r.account.currentBalance)
        this.user.balance.currency = r.account.currency
      })
    })
  }

  navigateToLeaderboard(){
    this.router.navigate(['home','dashboard','leaderboard'])
  }

  navigateToLearning(){
    this.router.navigate(['home','learning'])
  }

  checkIfItIsDashboard(){
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }
}
