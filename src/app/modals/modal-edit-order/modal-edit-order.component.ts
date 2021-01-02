import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-modal-edit-order',
  templateUrl: './modal-edit-order.component.html',
  styleUrls: ['./modal-edit-order.component.scss'],
})
export class ModalEditOrderComponent implements OnInit {
  @Input() position
  @Input() pending
  
  constructor(private modalCtrl: ModalController, private orderService: OrderService) { }

  ngOnInit() {
    console.log(this.position)
    console.log(this.pending)
  }

  dismissModal(change?){
    this.modalCtrl.dismiss(change)
  }

  savePosition(){
    (this.position != null) 
      && this.orderService
      .updateOrder(this.position.id, this.position.target, this.position.stoploss)
      .subscribe(() => {}, () => {}, () => this.dismissModal(true))
  }

  sellPosition(){
    (this.position != null) 
    && this.orderService
      .exitPosition(this.position.id)
      .subscribe(() => {}, () => {}, () => this.dismissModal())
  }

  savePending(){
    (this.pending != null) 
    && this.orderService
      .updateOrder(this.pending.id, this.pending.target, this.pending.stoploss)
      .subscribe(() => {}, () => {}, () => this.dismissModal(true))
  }

}
