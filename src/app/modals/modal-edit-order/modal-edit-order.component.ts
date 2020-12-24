import { Order } from 'android/app/build/intermediates/merged_assets/debug/out/public/assets/charting_library/charting_library';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Completed } from 'src/app/models/completed.model';
import { Pending } from 'src/app/models/pending.model';
import { Position } from 'src/app/models/position.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-modal-edit-order',
  templateUrl: './modal-edit-order.component.html',
  styleUrls: ['./modal-edit-order.component.scss'],
})
export class ModalEditOrderComponent implements OnInit {
  @Input() position: Order
  @Input() pending: Order
  
  constructor(private modalCtrl: ModalController, private orderService: OrderService) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  savePosition(){
    // (this.position != null) && this.orderService.savePosition(this.position)
    // this.dismissModal()
  }

  sellPosition(){
    // (this.position != null) && this.orderService.sellPosition(this.position)
    // this.dismissModal()
  }

  savePending(){
    // (this.pending != null) && this.orderService.savePending(this.pending)
    // this.dismissModal()
  }

}
