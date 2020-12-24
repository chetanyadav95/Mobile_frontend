import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  constructor(private stockService: StockService){}

  ngOnInit() {
    this.stockService.listen('stockid').subscribe(data=>{
      console.log(data)
    })
  }
}
