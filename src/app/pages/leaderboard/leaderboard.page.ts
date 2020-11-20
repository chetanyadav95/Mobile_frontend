import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  leaderboard = [
    {
      name: 'Chetan',
      score: '100'
    },
    {
      name: 'Ibrahim',
      score: '90'
    },
    {
      name: 'Muatesim',
      score: '80'
    },
    {
      name: 'John',
      score: '70'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
