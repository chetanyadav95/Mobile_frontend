import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Stock } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-buy-sell-modal-popup',
  templateUrl: './buy-sell-modal-popup.component.html',
  styleUrls: ['./buy-sell-modal-popup.component.scss'],
})
export class BuySellModalPopupComponent implements OnInit {
  @Input('selectedStock') selectedStock: Stock
  company: Stock
  constructor(private modalCtrl: ModalController, 
    private stockService: StockService,
    private router: Router) { }

  ngOnInit() {
    this.stockService.getStock(this.selectedStock.id).subscribe((stockData:any) => {
      this.selectedStock.ldp = stockData.data.historyData['1month'][stockData.data.historyData['1month'].length - 1].close
    })
    this.stockService.listen(this.selectedStock.id).subscribe((res:any) => {
      this.selectedStock.ltp = res[0].price
    })
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  onClick(isBuy: boolean){
    this.modalCtrl.dismiss()
    this.router.navigate(['home','watchlist','buy-sell',this.selectedStock.id],{queryParams: {isBuy}})
  }
  navigateToChart(){
    this.modalCtrl.dismiss()
    this.router.navigate(['home','chart','tv-chart'])
  }
}
