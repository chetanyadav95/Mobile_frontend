import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  videos = [
    {
      name: 'Video 1',
      url: 'https://www.youtube.com/embed/1ozGKlOzEVc',
    },
    {
      name: 'Video 2',
      url: 'https://www.youtube.com/embed/vZv9-TWdBJM',
    },
  ]
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

  constructor(private sanitizer: DomSanitizer, private router: Router){
  }

  ngOnInit() {
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  navigateToLeaderboard(){
    this.router.navigate(['home','leaderboard'])
  }

  navigateToLearning(){
    this.router.navigate(['home','learning'])
  }

}
