import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  position: Order[] = []
  completed: Order[] = []
  pending: Order[] = []
  totalPandL: number
  pageIndex: number = 0
  constructor(private orderService: OrderService, 
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController,
    private stockService: StockService) { }

  ngOnInit() {
    this.orderService.getAllUserOrders().subscribe((res:any) => {
      console.log(res)
      res.data.forEach((o: Order) => {
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
      })
      this.updatePositionLtp()
      this.updatePendingLtp()
      // this.totalPandL = this.orderService.totalPandL()
    })
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

  getStockName(id){
    let name
    this.stockService.getStock(id).subscribe((s:any) => {
      console.log('stock names',s)
      name = s.data.name
    })
    return name
  }

  updatePositionLtp(){
    this.position.forEach(s => {
      this.stockService.listen(s.stockId).subscribe((res:any) => {
        s.ltp = res[0].price
      })
    });
  }

  updatePendingLtp(){
    this.pending.forEach(s => {
      this.stockService.listen(s.stockId).subscribe((res:any) => {
        s.ltp = res[0].price
      })
    });
  }

  tabIndex(ev){
    this.pageIndex = ev.detail.index
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
}
