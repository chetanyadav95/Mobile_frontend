import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video.model';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.page.html',
  styleUrls: ['./tutorials.page.scss'],
})
export class TutorialsPage implements OnInit {
  videos: Video[]

  constructor(private sanitizer: DomSanitizer, private learningService: LearningService){
  }

  ngOnInit() {
    this.videos = this.learningService.videos
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
