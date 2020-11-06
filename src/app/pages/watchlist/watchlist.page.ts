import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalWatchlistCeComponent } from 'src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { ModalWatchlistComponent } from 'src/app/modals/modal-watchlist/modal-watchlist.component';
import { Company } from 'src/app/models/company.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  jsonData: Company[] = []
  watchlists: Watchlist[] = []
  selectedTab: number = 0
  constructor(private modalController: ModalController, 
    private watchlistService: WatchlistService, 
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    // this.watchlistService.watchlistsSubject.subscribe(w => this.watchlists = w)
    // this.watchlistService.jsonDataSubject.subscribe(j => this.jsonData = j)
    this.jsonData = this.watchlistService.jsonData
    this.watchlists = this.watchlistService.watchlists
  }

  async openCompaniesModal() {
    const modal = await this.modalController.create({
      component: ModalWatchlistComponent,
      componentProps: {tabIndex: this.selectedTab}
    });
    return await modal.present();
  }

  async openWatchlistModal(isEdit: boolean) {
    const modal = await this.modalController.create({
      component: ModalWatchlistCeComponent,
      componentProps: {isEdit, tabIndex: this.selectedTab}
    });
    return await modal.present();
  }
  
  onTitleClick(){
    this.presentActionSheet()
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      // cssClass: 'my-custom-class',
      buttons: [{
        text: 'New',
        icon: 'add',
        handler: () => {
          this.openWatchlistModal(false)
        }
      },  {
        text: 'Edit',
        icon: 'create-outline',
        handler: () => {
          this.openWatchlistModal(true)
        }
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          this.deleteWatchlist()
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  deleteWatchlist(){
    this.watchlistService.deleteWatchlist(this.selectedTab)
  }
}
