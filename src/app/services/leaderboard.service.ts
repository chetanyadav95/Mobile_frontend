import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  leaderboard = [
    {
      name: 'Chetan',
      score: 0.310
    },
    {
      name: 'Ibrahim',
      score: 0.301
    },
    {
      name: 'Muatesim',
      score: 0.293
    },
    {
      name: 'John',
      score: 0.291
    },
    {
      name: 'Priyansh',
      score: 0.285
    },
    {
      name: 'Amit',
      score: 0.279
    },
    {
      name: 'Michael',
      score: 0.268
    },
  ]

  constructor() { }
}
