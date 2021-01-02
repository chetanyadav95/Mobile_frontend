import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Marubozu } from 'src/app/models/marubozu.model';
import { Video } from 'src/app/models/video.model';
import { LearningService } from 'src/app/services/learning.service';
import { MarubozuService } from 'src/app/services/marubozu.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.page.html',
  styleUrls: ['./tutorials.page.scss'],
})
export class TutorialsPage implements OnInit {
  videos: Video[]
  vids: Marubozu[]

  constructor(private sanitizer: DomSanitizer, 
    private learningService: LearningService, 
    private marubozuService: MarubozuService){
  }

  ngOnInit() {
    this.videos = this.learningService.videos
    this.marubozuService.get('tutorial').subscribe((r:any) => {
      this.vids = r.data
    })
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
