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

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  savePosition(){
    (this.position != null) && this.orderService.savePosition(this.position.id, this.position.target, this.position.stoploss).subscribe(r => console.log(r))
    this.dismissModal()
  }

  sellPosition(){
    (this.position != null) && this.orderService.exitPosition(this.position.id).subscribe(r => console.log(r))
    this.dismissModal()
  }

  savePending(){
    // (this.pending != null) && this.orderService.savePending(this.pending)
    // this.dismissModal()
  }

}
