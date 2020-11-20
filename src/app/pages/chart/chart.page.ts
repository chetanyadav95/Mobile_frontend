import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
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
