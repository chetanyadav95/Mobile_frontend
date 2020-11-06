import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Company } from 'src/app/models/company.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-modal-watchlist',
  templateUrl: './modal-watchlist.component.html',
  styleUrls: ['./modal-watchlist.component.scss'],
})
export class ModalWatchlistComponent implements OnInit{
  jsonData: Company[]
  filteredData: Company[]
  selectedWatchlist: Watchlist
  @Input() tabIndex: number

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }
  
  ngOnInit(){
    this.jsonData = this.watchlistService.jsonData
    this.selectedWatchlist = this.watchlistService.watchlists[this.tabIndex]
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  onSelect(event: boolean, company: Company){
    event 
      ? this.watchlistService.addToWatchlist(this.tabIndex, company)
      : this.watchlistService.removeFromWatchlist(this.tabIndex, company)
  }

  filter(filterValue: any){
    this.filteredData = this.jsonData.filter(company => company.name.toLowerCase().includes(filterValue.toLowerCase()))
  }

  seeIfChecked(company: Company){
    if(this.selectedWatchlist.companies != undefined || this.selectedWatchlist.companies != null)
      return this.selectedWatchlist.companies.find(c => c.name == company.name)
    else false
  }
}
