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

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private userService: UserService) { }

  ngOnInit() {
    this.watchlistService.getUserWatchlists().subscribe((w:any) => this.watchlists = w.data)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
  
  onCreateWatchlist(createWatchlistForm: NgForm){
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.watchlistName = this.watchlistName.trim()
      this.watchlistService.createWatchlist(this.watchlistName).subscribe(res => console.log(res))
      this.watchlistName = ''
    }
  }

  drop(event: CdkDragDrop<string[]>){
    //needs to happen in backend
    moveItemInArray(this.watchlists, event.previousIndex, event.currentIndex);
    this.watchlistService.updatedWatchlist.next(true)
  }
}
