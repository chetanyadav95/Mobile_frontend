import { Component, OnInit } from '@angular/core';
import { Completed } from 'src/app/models/completed.model';
import { Pending } from 'src/app/models/pending.model';
import { Position } from 'src/app/models/position.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  position: Position[]
  completed: Completed[]
  pending: Pending[]
  totalPandL: number
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.position = this.orderService.position
    this.completed = this.orderService.completed
    this.pending = this.orderService.pending
    this.totalPandL = this.orderService.totalPandL()
  }

}
