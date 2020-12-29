import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Stock } from 'src/app/models/stock.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { StockService } from 'src/app/services/stock.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-modal-watchlist',
  templateUrl: './modal-watchlist.component.html',
  styleUrls: ['./modal-watchlist.component.scss'],
})
export class ModalWatchlistComponent implements OnInit{
  stocks: Stock[]
  filteredData: Stock[]
  sWatchlist: Watchlist
  @Input() selectedWatchlist: string

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private stockService: StockService) { }
  
  ngOnInit(){
    this.stockService.getStocks().subscribe((s: any) => {
      this.stocks = s.data
    })
    this.watchlistService.getWatchlist(this.selectedWatchlist).subscribe((w:any)=> {
      this.sWatchlist = w.data
    })
  }

  dismissModal(){
    this.modalCtrl.dismiss(true)
  }

  onSelect(event: boolean, stock){
    if(event == true)
      this.watchlistService.addToWatchlist(this.selectedWatchlist, stock._id).subscribe()
    else if(event == false) 
      this.watchlistService.removeFromWatchlist(this.selectedWatchlist, stock._id).subscribe()
  }

  filter(filterValue: any){
    this.filteredData = this.stocks.filter(stock => stock.name.toLowerCase().includes(filterValue.toLowerCase()))
  }

  seeIfChecked(stock){
    if(this.sWatchlist.stockIds.length > 0)
      return this.sWatchlist.stockIds.find(s => s.id == stock._id)
    else false
  }
}
