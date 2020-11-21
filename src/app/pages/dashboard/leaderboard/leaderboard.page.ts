import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  leaderboard
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.leaderboard = this.leaderboardService.leaderboard
  }

}
