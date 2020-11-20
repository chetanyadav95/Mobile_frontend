import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {

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
  constructor(private sanitizer: DomSanitizer){
  }

  ngOnInit() {
  }
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
