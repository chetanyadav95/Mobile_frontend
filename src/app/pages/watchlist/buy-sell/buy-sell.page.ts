import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock.model';
import { OrderService } from 'src/app/services/order.service';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {
  isBuy: boolean
  company: any
  availableBalance: number
  approxMargin: number
  capitalAtRisk: number
  limitVal: number = 0
  @ViewChild('buySellForm') buySellForm: NgForm
  constructor(private route: ActivatedRoute, 
    private stockService: StockService,
    private orderService: OrderService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.approxMargin = 2167
    this.capitalAtRisk = this.approxMargin / this.availableBalance
    this.userService.accountDetails().subscribe((res:any) => {
      this.availableBalance = res.account.currentBalance
    })
    this.route.queryParams.subscribe(data => {
      data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false
    })
    this.route.params.subscribe(data => 
      this.stockService.getStock(data["id"]).subscribe((c:any) => {
        this.company = c.data
        this.updateLtp()
      })
    )
  }
  
  updateLtp(){
    this.stockService.listen(this.company?._id).subscribe((res:any) => {
      this.company.ltp = res[0].price
    })
  }

  navigateToWatchlist(){
    this.router.navigate(['home','watchlist'])
  }
  
  changeType(event: any){
    event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false
  }

  onSubmit(){
    const quantity = this.buySellForm.value.quantity
    const price = this.buySellForm.value.price
    const order = this.buySellForm.value.order
    const stopLoss = this.buySellForm.value.stopLoss
    const target = this.buySellForm.value.target
    if(quantity != '' && order != '' && price != '' && quantity > 0 ){
      if(order == 'limit' && price > 0){
        this.isBuy 
          ?  this.orderService.buy(this.company._id, quantity, stopLoss, target, order, price)
          :  this.orderService.sell(this.company._id, quantity, stopLoss, target, order, price)
        this.router.navigate(['home','orders'])
      } else {
        this.isBuy 
          ?  this.orderService.buy(this.company._id, quantity, stopLoss, target, order, this.company.ltp)
          :  this.orderService.sell(this.company._id, quantity, stopLoss, target, order, this.company.ltp)
        this.router.navigate(['home','orders'])
      }
    }
  }
}
