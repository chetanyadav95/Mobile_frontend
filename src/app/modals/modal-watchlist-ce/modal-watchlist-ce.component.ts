import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Watchlist } from 'src/app/models/watchlist.model';

@Component({
  selector: 'app-modal-watchlist-ce',
  templateUrl: './modal-watchlist-ce.component.html',
  styleUrls: ['./modal-watchlist-ce.component.scss'],
})
export class ModalWatchlistCeComponent implements OnInit {
  @Input() selectedWatchlist: Watchlist
  watchlistName: string
  companies = []
  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }

  ngOnInit() {
    // this.watchlistService.getWatchlist(this.selectedWatchlist).subscribe((w:any)=>{
      this.companies = this.selectedWatchlist.stockIds
      this.watchlistName = this.selectedWatchlist.name
    // })
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
  
  onEditWatchlist(){    
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.watchlistName = this.watchlistName.trim()
      this.watchlistService.editWatchlist(this.selectedWatchlist._id, this.watchlistName)
    }
  }

  drop(event: CdkDragDrop<string[]>){
    //needs to happen in backend
    moveItemInArray(this.companies, event.previousIndex, event.currentIndex);
    this.changePosition()
  }

  changePosition(){
    const positions: any[] = []
    for (let i = 0; i < this.watchlists.length; i++) {
      const w = this.watchlists[i];
      positions.push({watchlistId:w._id, position:i})
    }
    this.watchlistService.updateWatchlistPositions(positions).subscribe()
    this.watchlistService.updatedWatchlist.next(true)
  }
}
