import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { BuySellModalPopupComponent } from 'src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component';
import { ModalEditWatchlistsComponent } from 'src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component';
import { ModalWatchlistCeComponent } from 'src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { ModalWatchlistComponent } from 'src/app/modals/modal-watchlist/modal-watchlist.component';
import { Stock } from 'src/app/models/stock.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  companies: Stock[] = []
  watchlists: Watchlist[] = []
  selectedWatchlist: string = '1'
  isSimualted: boolean
  constructor(private modalController: ModalController, 
    private watchlistService: WatchlistService, 
    private actionSheetController: ActionSheetController,
    private stockService: StockService,
    private userService: UserService) { }

  ngOnInit() {
    this.watchlistService.getUserWatchlists().subscribe((w:any) => {
      this.watchlists = w.data
      this.selectedWatchlist = this.watchlists[0]._id
      this.updateLtp(0)
      console.log('user watchlist',this.watchlists)
    })
    this.isSimualted = this.userService.isSimulated
  }

  updateLtp(watchlistId: number){
    this.watchlists[watchlistId].stockIds.forEach((s,i) => {
      this.stockService.getStock(s.id).subscribe((stockData:any) => {
        console.log(stockData.data.historyData['1month'])
        s.ldp = stockData.data.historyData['1month'][stockData.data.historyData['1month'].length - 1].close
      })
      this.stockService.listen(s.id).subscribe((res:any) => {
        s.ltp = res[0].price
      })
    });
  }

  async openCompaniesModal(id) {
    const modal = await this.modalController.create({
      component: ModalWatchlistComponent,
      componentProps: {selectedWatchlist: id}
    });
    return await modal.present();
  }

  async openWatchlistModal(isEdit: boolean) {
    const modal = await this.modalController.create({
      component: ModalWatchlistCeComponent,
      componentProps: {isEdit, selectedWatchlist: this.selectedWatchlist}
    });
    return await modal.present();
  }

  async openBuySellModal(stock: Stock) {
    const modal = await this.modalController.create({
      component: BuySellModalPopupComponent,
      componentProps: {selectedStock: stock}
    });
    return await modal.present();
  }

  async openManageWatchlists(){
    const modal = await this.modalController.create({
      component: ModalEditWatchlistsComponent,
      // componentProps: {selectedCompany: id}
    });
    return await modal.present();
  }
  
  onWatchlistTabClick(){
    this.watchlistEditActionSheet()
  }

  onWatchlistTitleClick(){
    this.watchlistTitleActionSheet()
  }

  async watchlistTitleActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header:'Watchlist control panel',
      buttons: [
        {
        text: 'Manage',
        icon: 'cog',
        handler: () => {
          this.openManageWatchlists()
        }
       }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async watchlistEditActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header:'Watchlist manage panel',
      buttons: [
      {
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
    this.watchlistService.deleteWatchlist(this.selectedWatchlist)
  }

  tabIndex(event: any){
    this.selectedWatchlist = event
    console.log(event)
  }
}
