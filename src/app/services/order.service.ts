import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';
import { StockService } from './stock.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl + 'stocks/'
  constructor(private stockService: StockService, private http: HttpClient, private router: Router) { }

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
    return this.http.put(this.apiUrl + 'order/update', {id, stoploss, target} )
  }

  savePosition(id, target, stoploss){
    return this.http.put(this.apiUrl + 'order/update',{id, target, stoploss})
  }

  exitPosition(id){
    return this.http.post(this.apiUrl + 'order/stop',{id})
  }
  
  buy(cId: string,quantity: number, stopLoss: number, target: number, order: string, price?: number){
    let company
    this.stockService.getStock(cId).subscribe((c:any) => {
      company = c.data
      var pending
      pending = {stockId: cId, volume: quantity, stoploss: stopLoss, target, price}
      order == 'limit'
      ? this.stockService.orderStockLimitBuy(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
      : this.stockService.orderStockMarketBuy(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    })
  }

  sell(cId: string,quantity: number, stopLoss: number, target: number, order: string, price?: number){
    let company
    this.stockService.getStock(cId).subscribe((c:any) => {
      company = c.data
      var pending
      pending = {stockId: cId, volume: quantity, stoploss: stopLoss, target, price}
      order == 'limit'
      ? this.stockService.orderStockLimitSell(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
      : this.stockService.orderStockMarketSell(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    })
  }

  totalPandL(){}

  savePending(pending){}
}
