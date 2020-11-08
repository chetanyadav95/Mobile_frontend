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
  companies: Company[]
  filteredData: Company[]
  sWatchlist: Watchlist
  @Input() selectedWatchlist: number

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }
  
  ngOnInit(){
    this.companies = this.watchlistService.companies
    this.sWatchlist = this.watchlistService.getWatchlist(this.selectedWatchlist)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  onSelect(event: boolean, company: Company){
    if(event == true)
      this.watchlistService.addToWatchlist(this.selectedWatchlist, company)
    else if(event == false) 
      this.watchlistService.removeFromWatchlist(this.selectedWatchlist, company)
  }

  filter(filterValue: any){
    this.filteredData = this.companies.filter(company => company.name.toLowerCase().includes(filterValue.toLowerCase()))
  }

  seeIfChecked(company: Company){
    if(this.sWatchlist.companies != undefined || this.sWatchlist.companies != null)
      return this.sWatchlist.companies.find(c => c.name == company.name)
    else false
  }
}
