import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {
  isBuy: boolean
  company: Company
  @ViewChild('buySellForm') buySellForm: NgForm
  constructor(private route: ActivatedRoute, 
    private watchlistService: WatchlistService,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false
    })
    this.route.params.subscribe(data => this.company = this.watchlistService.getCompany(data["id"]))
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
    if(quantity != '' && order != '' && price != '' && quantity > 0 ){
      if(order != 'market' && price > 0){
        console.log({formVal: this.buySellForm.value})
        alert('check console log for values.')
      } else {
        console.log({formVal: this.buySellForm.value})
        alert('check console log for values.')
      }
    } else alert('err')
  }
}
