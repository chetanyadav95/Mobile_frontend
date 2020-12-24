import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';
import { Completed } from '../models/completed.model';
import { Pending } from '../models/pending.model';
import { Position } from '../models/position.model';
import { WatchlistService } from './watchlist.service';
import { StockService } from './stock.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  position: Position[] = []
  completed: Completed[] = []
  pending: Pending[] = []

  apiUrl = environment.apiUrl + 'stocks/'
  constructor(private watchlistService: WatchlistService, private stockService: StockService, private http: HttpClient) { }

  getAllUserOrders(){
    return this.http.get(this.apiUrl + 'orders/all')
  }

  getOrder(id: string){
    return this.http.get(this.apiUrl + `orders/${id}` )
  }

  stopOrder(id: string){
    return this.http.post(this.apiUrl + 'order/stop', {id} )
  }

  updateOrder(id: string, stoploss: number, target: number){
    return this.http.post(this.apiUrl + 'order/update', {id, stoploss, target} )
  }
  
  buy(cId: string,quantity: number, stopLoss: number, target: number, order: string, price?: number){
    let company
    this.stockService.getStock(cId).subscribe((c:any) => {
      company = c.data
      var pending : Pending
      pending = {stockId: cId, volume: quantity, stoploss: stopLoss, target, price}
      order == 'limit'
      ? this.stockService.orderStockLimitBuy(pending).subscribe(r => console.log('buy',r))
      : this.stockService.orderStockMarketBuy(pending).subscribe(r => console.log('buy',r))
    })
  }

  sell(cId: string,quantity: number, stopLoss: number, target: number, order: string, price?: number){
    let company
    this.stockService.getStock(cId).subscribe((c:any) => {
      company = c.data
      var pending : Pending
      pending = {stockId: cId, volume: quantity, stoploss: stopLoss, target, price}
      order == 'limit'
      ? this.stockService.orderStockLimitSell(pending).subscribe(r => console.log('sell',r))
      : this.stockService.orderStockMarketSell(pending).subscribe(r => console.log('sell',r))
    })
  }

  totalPandL(){
    const pos = this.position.map(p => p.pAndL)
    const val = pos.reduce((p, c) => p + c)
    return val
  }

  savePosition(position: Position){
    // var positionToUpdate = this.position.find(p => p.code == position.code)
    // var indexOfPositionToUpdate = this.position.indexOf(positionToUpdate)
    // this.position.splice(indexOfPositionToUpdate,1,position)
  }

  sellPosition(position: Position){
    // var positionToUpdate = this.position.find(p => p.code == position.code)
    // var indexOfPositionToUpdate = this.position.indexOf(positionToUpdate)
    // this.position.splice(indexOfPositionToUpdate,1)
    // const completed: Completed = {
    //   name: position.name, 
    //   code: position.code,  
    //   price: position.price, 
    //   quantity: -position.quantity,
    //   status: 'COMPLETE',
    //   pAndL: position.pAndL,
    //   exitPrice: position.price
    // }
    // this.completed.unshift(completed)
  }

  savePending(pending: Pending){
    // var pendingToUpdate = this.pending.find(p => p.code == pending.code)
    // var indexOfPendingToUpdate = this.pending.indexOf(pendingToUpdate)
    // this.pending.splice(indexOfPendingToUpdate,1,pending)
  }
}
