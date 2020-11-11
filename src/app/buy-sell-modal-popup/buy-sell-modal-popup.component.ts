import { WatchlistService } from './../services/watchlist.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buy-sell-modal-popup',
  templateUrl: './buy-sell-modal-popup.component.html',
  styleUrls: ['./buy-sell-modal-popup.component.scss'],
})
export class BuySellModalPopupComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }
}
