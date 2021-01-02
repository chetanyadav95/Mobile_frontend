import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit, AfterViewInit {
  isBuy: boolean
  company: any
  price: number = 0
  quantity: number = 0
  availableBalance: number
  capitalAtRisk: number = 0
  limitVal: number = 0
  approxMargin: number = 0
  @ViewChild('buySellForm') buySellForm: NgForm
  @ViewChild('marketRadio') marketRadio
  constructor(private route: ActivatedRoute, 
    private stockService: StockService,
    private orderService: OrderService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
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
  ngAfterViewInit(){
    this.buySellForm.valueChanges.subscribe(data => {
      this.approxMargin = data.price * data.quantity
      this.capitalAtRisk = this.approxMargin / this.availableBalance
      if((data.quantity == 0 && data.price == 0) || data.quantity == null || data.price == null){
        this.capitalAtRisk = 0
        this.approxMargin = 0
      }
    });
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
