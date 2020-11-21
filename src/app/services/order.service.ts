import { Injectable } from '@angular/core';
import { Completed } from '../models/completed.model';
import { Pending } from '../models/pending.model';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  position: Position[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      pAndL: 10.00,
      LTP: 78.0,
      SL: 77.5
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      pAndL: 100.00,
      LTP: 2101,
      SL: 2095
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      pAndL: -90.00,
      LTP: 245.9,
      SL: 244.0
    },
  ]
  completed: Completed[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      status: 'CANCELLED',
      pAndL: -10.00,
      exitPrice: 78.0
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      status: 'COMPLETE',
      pAndL: 100.00,
      exitPrice: 2101
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      status: 'COMPLETE',
      pAndL: -90.00,
      exitPrice: 245.9
    },
  ]
  pending: Pending[] = [
    {
      name: 'IOC',
      code: 'IOC',
      price: 78.1,
      quantity: 100,
      LTP: 78.5
    },
    {
      name: 'Reliance',
      code: 'Reliance',
      price: 2100,
      quantity: 100,
      LTP: 2101
    },
    {
      name: 'SBIN',
      code: 'SBIN',
      price: 245,
      quantity: -100,
      LTP: 245.9
    },
  ]
  constructor() { }

  totalPandL(){
    const pos = this.position.map(p => p.pAndL)
    const val = pos.reduce((p, c) => p + c)
    return val
  }
}
