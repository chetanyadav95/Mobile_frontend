import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  jsonData: Company[] = [
    {
      name: 'Infosys',
      code: 'Infy',
      greenNum: 92.90,
      rateRaw: 4.00,
      isRising: true,
      ratePercentage: 4.50
    },
    {
      name: 'Niftybees',
      code: 'Nifty',
      greenNum: 958.10,
      isRising: true,
      rateRaw: 18.25,
      ratePercentage: 1.94
    },
    {
      name: 'Tesla Motors',
      code: 'Tsla',
      greenNum: 119.85,
      isRising: false,
      rateRaw: 5.05,
      ratePercentage: 4.40
    },
    {
      name: 'Apple Inc.',
      code: 'Aapl',
      greenNum: 2102.35,
      isRising: true,
      rateRaw: 42.30,
      ratePercentage: 2.05
    },
    {
      name: 'McDonalds',
      code: 'MCDS',
      greenNum: 128.25,
      isRising: false,
      rateRaw: 1.55,
      ratePercentage: 1.22
    }]
  watchlists: Watchlist[] = [
    {
      name: 'Watchlist 1',
      companies: [
        this.jsonData[0],
        this.jsonData[1],
      ]
    },
    {
      name: 'Watchlist 2',
      companies: [
        this.jsonData[2],
        this.jsonData[3],
      ]
    },
    {
      name: 'Watchlist 3',
      companies: [
        this.jsonData[4],
      ]
    }]
  constructor() { }

  addToWatchlist(wIndex: number, company: Company){
    if(!this.watchlists[wIndex].companies.find(c => company == c))
      this.watchlists[wIndex].companies.push(company)
  }

  removeFromWatchlist(wIndex: number, company: Company){
    if(this.watchlists[wIndex].companies.find(c => company == c))
      this.watchlists[wIndex].companies.splice(this.watchlists[wIndex].companies.indexOf(company),1)
  }

  createWatchlist(name: string){
    const watchlist: Watchlist = {name, companies:[]}
    this.watchlists.push(watchlist)
  }

  editWatchlist(i: number, name: string){
    this.watchlists[i].name = name
  }

  deleteWatchlist(i: number){
    this.watchlists.splice(i, 1)
  }
}
