import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalEditOrderComponent } from 'src/app/modals/modal-edit-order/modal-edit-order.component';
import { Order } from 'src/app/models/order.model';
import { StockService } from 'src/app/services/stock.service';
import { Subscription } from 'rxjs';
import { OrderMin } from 'src/app/models/order-min';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, OnDestroy {
  position: OrderMin[]
  completed: OrderMin[]
  pending: OrderMin[]
  filteredPosition: OrderMin[]
  filteredCompleted: OrderMin[]
  filteredPending: OrderMin[]
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
  }

  ionViewDidEnter(){
    this.getOrders()
  }

  getOrders(){
    this.dataLoaded = false
    this.pending = []
    this.position = []
    this.completed = []
    this.orderService.getAllUserOrders().subscribe((res:any) => {
      res.data.forEach((o: Order) => {
        const order: OrderMin = {
          id: o._id,
          stockId: o.stockId,
          orderCategory: o.orderCategory,
          name: o.companyName,
          price: o.price,
          quantity: o.volume
        }
        this.orderPlacement(o.transactionOne.status, order, o.transactionOne.price)
        this.orderPlacement(o.transactionTwo.stoplossStatus, order, o.stoploss, 'stoploss', o.orderCategory)
        this.orderPlacement(o.transactionTwo.targetStatus, order, o.target, 'target', o.orderCategory)
        if(o.status == 'positioned' && o.transactionOne.status == 'completed'){
          order.stoploss = o.stoploss
          order.target = o.target
          this.position.push(Object.assign({},order))
        }
        else if(o.status == 'completed' && o.transactionTwo.stoplossStatus == 'notFilled' && o.transactionTwo.targetStatus == 'notFilled') {   
          const o = Object.assign({},order)
          o['status'] = 'completed' 
          o.orderCategory = order.orderCategory == 'buy' ? 'sell' : 'buy'
          this.completed.push(o)
        }
      })
      this.updateLtp()
      // this.totalPandL = this.orderService.totalPandL()
    })
  }

  // checkIfOrderIsCompleted(complete: Order){
  //   if(complete.transactionOne.status == "completed"){
  //     this.completed.push(complete)
  //   }
  //   else if(complete.transactionOne.status == "pending"){
  //     this.pending.push(complete)
  //   }
  //   if(complete.transactionTwo.status == "pending"){
  //     if(complete.stoploss){
  //       let order = Object.assign({},complete)
  //       order['isStopLoss'] = true
  //       this.pending.push(order)
  //     }
  //     if(complete.target){
  //       let order = Object.assign({},complete)
  //       order['isStopLoss'] = false
  //       this.pending.push(order)
  //     }
  //   }
  // }
  orderPlacement(status, order, price, key?, orderCategory?){
    const o = Object.assign({},order)
    switch (status) {
      case 'completed':
        if(orderCategory != null)
          o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy'
        else o.orderCategory = order.orderCategory
        o.price = price
        o['status'] = status
        this.completed.push(o)
        break;
      case 'pending':
        if(orderCategory != null)
          o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy'
        else o.orderCategory = order.orderCategory
        key != null ? o.key = key : o.key = 'price'
        console.log('key not recognized as target nor stoploss');
        this.pending.push(o)
        break;
      case 'notFilled':
        if(orderCategory != null)
          o.orderCategory = orderCategory == 'buy' ? 'sell' : 'buy'
        else o.orderCategory = order.orderCategory
        o.price = price
        o['status'] = 'cancelled'
        this.completed.push(o)
        break;
      default:
        break;
    }
  }

  updateLtp(){
    this.unsubscribeFromSockets()
    this.position.forEach((s:any) => {
      let stockSub : Subscription = this.stockService.listen(s.stockId).subscribe((res:any) => {
        s.ltp = res[0].price
        this.dataLoaded = true
      })
      this.subscribedPositionSockets.push(stockSub)
    });
    this.pending.forEach((s:any) => {
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
    modal.onDidDismiss().then((data) => {
      if(data == true) this.getOrders()
    })
    return await modal.present();
  }

  async openModalEditOrderPending(pending) {
    const modal = await this.modalCtrl.create({
      component: ModalEditOrderComponent,
      componentProps: {pending}
    });
    modal.onDidDismiss().then((data) => {
      if(data == true) this.getOrders()
    })
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

  filterPosition(e){
    this.filteredPosition = this.position.filter(p => p.name.toLowerCase().includes(e.detail.value.toLowerCase()))
  }

  filterCompleted(e){
    this.filteredCompleted = this.completed.filter(p => p.name.toLowerCase().includes(e.detail.value.toLowerCase()))
  }

  filterPending(e){
    this.filteredPending = this.pending.filter(p => p.name.toLowerCase().includes(e.detail.value.toLowerCase()))
  }

  ionViewDidLeave(){
    this.unsubscribeFromSockets()
  }

  ngOnDestroy(){
    this.unsubscribeFromSockets()
  }
}
