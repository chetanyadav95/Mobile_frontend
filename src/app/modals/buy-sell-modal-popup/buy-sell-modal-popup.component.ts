import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Company } from 'src/app/models/company.model';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-buy-sell-modal-popup',
  templateUrl: './buy-sell-modal-popup.component.html',
  styleUrls: ['./buy-sell-modal-popup.component.scss'],
})
export class BuySellModalPopupComponent implements OnInit {
  @Input() selectedCompany: number
  company: Company
  constructor(private modalCtrl: ModalController, 
    private watchlistService: WatchlistService,
    private router: Router) { }

  ngOnInit() {
    this.company = this.watchlistService.getCompany(this.selectedCompany)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  onClick(isBuy: boolean){
    this.modalCtrl.dismiss()
    this.router.navigate(['home','watchlist','buy-sell',this.company.id],{queryParams: {isBuy}})
  }
  navigateToChart(){
    this.modalCtrl.dismiss()
    this.router.navigate(['home','chart'])
  }
}
