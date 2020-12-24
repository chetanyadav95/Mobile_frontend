import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { StockService } from 'src/app/services/stock.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
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
  view: any[] = [700, 300];
  leaderboard
  user: User
  
  constructor(private router: Router, 
    private leaderboardService: LeaderboardService,
    private userService: UserService,
    private stockService: StockService){
  }

  ngOnInit() {
    this.leaderboard = this.leaderboardService.leaderboard
    this.userService.user.subscribe(u => this.user = u)
    this.checkIfItIsDashboard()
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
