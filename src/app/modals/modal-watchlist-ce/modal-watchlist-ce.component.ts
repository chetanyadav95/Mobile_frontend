import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-modal-watchlist-ce',
  templateUrl: './modal-watchlist-ce.component.html',
  styleUrls: ['./modal-watchlist-ce.component.scss'],
})
export class ModalWatchlistCeComponent implements OnInit {
  @Input() isEdit: boolean
  @Input() tabIndex: number
  watchlistName: string
  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.isEdit == false 
      ? this.watchlistName = '' 
      : this.watchlistName = this.watchlistService.watchlists[this.tabIndex].name
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
  
  createWatchlist(){
    this.watchlistService.createWatchlist(this.watchlistName)
    this.dismissModal()
  }
  
  editWatchlist(){    
    this.watchlistService.editWatchlist(this.tabIndex, this.watchlistName)
    this.dismissModal()
  }
}
