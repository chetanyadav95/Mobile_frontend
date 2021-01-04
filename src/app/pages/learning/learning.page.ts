import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video.model';
import { LearningService } from 'src/app/services/learning.service';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { MarubozuService } from 'src/app/services/marubozu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {
  videos: Video[]
  selectedTab: number
  config: SuperTabsConfig = {
    allowElementScroll: true
  };
  constructor(private sanitizer: DomSanitizer, 
    private learningService: LearningService,
    private marubozuService: MarubozuService){
  }

  ngOnInit() {
    this.selectedTab = 0
    this.marubozuService.activeTab.next(this.selectedTab)
    this.videos = this.learningService.videos
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  tabIndex(e){
    this.selectedTab = e.detail.index
    this.marubozuService.activeTab.next(this.selectedTab)
  }
}
