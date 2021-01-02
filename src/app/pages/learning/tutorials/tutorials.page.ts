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
  sanitizedVideos: any[]
  vids: Marubozu[]

  constructor(private sanitizer: DomSanitizer, 
    private learningService: LearningService, 
    private marubozuService: MarubozuService){
  }

  ngOnInit() {
    this.sanitizedVideos = []
    this.videos = this.learningService.videos
    this.marubozuService.get('tutorial').subscribe((r:any) => {
      this.vids = r.data
    })
    this.videos.forEach(v => {
      const video: any = this.sanitizeUrl(v.url)
      video.name = v.name
      this.sanitizedVideos.push(video)
    })
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
