import { Watchlist } from './../../models/watchlist.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-modal-edit-watchlists',
  templateUrl: './modal-edit-watchlists.component.html',
  styleUrls: ['./modal-edit-watchlists.component.scss'],
})
export class ModalEditWatchlistsComponent implements OnInit {
  watchlists: Watchlist[] = []
  watchlistName: string
  changeInWatchlist: boolean

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getSettings().subscribe((r:any) => {
    const datatype = r.data.datatype
    if(datatype == 'simulated') this.watchlistService.getSimulatedWatchlists().subscribe(r => {
      console.log('simulated',r)
    })
    if(datatype == 'realtime') this.watchlistService.getRealtimeWatchlists().subscribe((r:any) => {
      console.log('realtime',r)
      this.watchlists = r.data
    })
  })
  }

  dismissModal(){
    this.modalCtrl.dismiss(this.changeInWatchlist)
  }
  
  onCreateWatchlist(createWatchlistForm: NgForm){
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.watchlistName = this.watchlistName.trim()
      this.watchlistService.createWatchlist(this.watchlistName).subscribe(() => this.changeInWatchlist = true)
      this.watchlistName = ''
    }
  }

  drop(event: CdkDragDrop<string[]>){
    //needs to happen in backend
    moveItemInArray(this.watchlists, event.previousIndex, event.currentIndex);
    this.changePosition()
  }

  changePosition(){
    // this.watchlists = this.watchlistService.moveInArray(this.watchlists, event.previousIndex, event.currentIndex)
    const positions: any[] = []
    for (let i = 0; i < this.watchlists.length; i++) {
      const w = this.watchlists[i];
      positions.push({watchlistId:w._id, position:i})
    }
    this.watchlistService.updateWatchlistPositions(positions).subscribe(() => this.changeInWatchlist = true)
  }
}
