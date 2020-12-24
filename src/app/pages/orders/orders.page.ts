import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Completed } from 'src/app/models/completed.model';
import { Pending } from 'src/app/models/pending.model';
import { Position } from 'src/app/models/position.model';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalEditOrderComponent } from 'src/app/modals/modal-edit-order/modal-edit-order.component';
import { Order } from 'src/app/models/order.model';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/models/stock.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, OnDestroy {
  position: Order[] = []
  completed: Order[] = []
  pending: Order[] = []
  dataLoaded: boolean
  totalPandL: number
  pageIndex: number
  subscribedPositionSockets: Subscription[] = []
  subscribedPendingSockets: Subscription[] = []
  constructor(private orderService: OrderService, 
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController,
    private stockService: StockService) { }

  ngOnInit() {
    this.dataLoaded = false
    this.pageIndex = 0
    this.orderService.getAllUserOrders().subscribe((res:any) => {
      res.data.forEach((o: Order) => {
        this.stockService.getStock(o.stockId).subscribe((s:any) => {
          o.stockName = s.data.companyName
        })
        switch (o.status) {
          case 'positioned':
            this.position.push(o)
            this.checkIfOrderIsCompleted(o)
            break;
          case 'completed':
            this.completed.push(o)
            break;
          case 'pending':
            this.pending.push(o)
            break;
          default:
            break;
        }
        console.log(o)
      })
      this.updateLtp()
      // this.totalPandL = this.orderService.totalPandL()
    })
  }

  ionViewDidEnter(){
    this.updateLtp()
  }

  checkIfOrderIsCompleted(complete: Order){
    if(complete.transactionOne.status == "completed"){
      this.completed.push(complete)
    }
    else if(complete.transactionOne.status == "pending"){
      this.pending.push(complete)
    }
    if(complete.transactionTwo.status == "pending"){
      if(complete.stoploss){
        let order = Object.assign({},complete)
        order['isStopLoss'] = true
        this.pending.push(order)
      }
      if(complete.target){
        let order = Object.assign({},complete)
        order['isStopLoss'] = false
        this.pending.push(order)
      }
    }
  }

  updateLtp(){
    this.unsubscribeFromSockets()
    this.position.forEach(s => {
      let stockSub : Subscription = this.stockService.listen(s.stockId).subscribe((res:any) => {
        s.ltp = res[0].price
        this.dataLoaded = true
      })
      this.subscribedPositionSockets.push(stockSub)
    });
    this.pending.forEach(s => {
      let stockSub : Subscription = this.stockService.listen(s.stockId).subscribe((res:any) => {
        s.ltp = res[0].price
        this.dataLoaded = true
      })
      this.subscribedPendingSockets.push(stockSub)
    });
    if(this.position.length == 0 && this.pending.length == 0 && this.completed.length == 0 || this.completed.length > 0)
      this.dataLoaded = true
  }

  async ordersActionSheet(order){
    const actionSheet = await this.actionSheetController.create({
      header:'Order control panel',
      buttons: [
      {
        text: 'Manage',
        icon: 'cog',
        handler: () => {
          if(this.pageIndex == 0)
            this.openModalEditOrderPosition(order)
          else if(this.pageIndex == 2)
            this.openModalEditOrderPending(order)
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

  async openModalEditOrderPosition(position) {
    const modal = await this.modalCtrl.create({
      component: ModalEditOrderComponent,
      componentProps: {position}
    });
    return await modal.present();
  }

  async openModalEditOrderPending(pending) {
    const modal = await this.modalCtrl.create({
      component: ModalEditOrderComponent,
      componentProps: {pending}
    });
    return await modal.present();
  }

  unsubscribeFromSockets(){
    this.subscribedPendingSockets.forEach(s => {
      s.unsubscribe()
    })
    this.subscribedPendingSockets.splice(0, this.subscribedPendingSockets.length)
    this.subscribedPositionSockets.forEach(s => {
      s.unsubscribe()
    })
    this.subscribedPositionSockets.splice(0, this.subscribedPositionSockets.length)
  }

  tabIndex(tab){
    if(typeof(tab) == 'number') this.pageIndex = tab
    else this.pageIndex = tab.detail.index
    this.updateLtp()
  }

  ionViewDidLeave(){
    this.unsubscribeFromSockets()
  }

  ngOnDestroy(){
    this.unsubscribeFromSockets()
  }
}
