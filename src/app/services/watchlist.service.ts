import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  companies: Company[] = [
    {
      id: 1,
      name: 'Infosys',
      code: 'Infy',
      greenNum: 92.90,
      rateRaw: 4.00,
      isRising: true,
      ratePercentage: 4.50
    },
    {
      id: 2,
      name: 'Niftybees',
      code: 'Nifty',
      greenNum: 958.10,
      isRising: true,
      rateRaw: 18.25,
      ratePercentage: 1.94
    },
    {
      id: 3,
      name: 'Tesla Motors',
      code: 'Tsla',
      greenNum: 119.85,
      isRising: false,
      rateRaw: 5.05,
      ratePercentage: 4.40
    },
    {
      id: 4,
      name: 'Apple Inc.',
      code: 'Aapl',
      greenNum: 2102.35,
      isRising: true,
      rateRaw: 42.30,
      ratePercentage: 2.05
    },
    {
      id: 5,
      name: 'McDonalds',
      code: 'MCDS',
      greenNum: 128.25,
      isRising: false,
      rateRaw: 1.55,
      ratePercentage: 1.22
    }]
  watchlists: Watchlist[] = [
    {
      id: 1,
      name: 'Watchlist 1',
      companies: [
        this.companies[0],
        this.companies[1],
      ]
    },
    {
      id: 2,
      name: 'Watchlist 2',
      companies: [
        this.companies[2],
        this.companies[3],
      ]
    },
    {
      id: 3,
      name: 'Watchlist 3',
      companies: [
        this.companies[4],
      ]
    }]
  constructor() { }

  getWatchlist(id: number){
    return this.watchlists.find(w => w.id == id)
  }

  getCompany(id: number){
    return this.companies.find(c => c.id == id)
  }

  addToWatchlist(id: number, company: Company){
    this.getWatchlist(id).companies.push(company)
    // if(!this.watchlists[wIndex].companies.find(c => company == c))
    //   this.watchlists[wIndex].companies.push(company)
  }

  removeFromWatchlist(id: number, company: Company){
    const watchlist = this.getWatchlist(id)
    const indexOfCompany = watchlist.companies.indexOf(company)
    this.getWatchlist(id).companies.splice(indexOfCompany,1)
    // watchlist.companies.splice(indexOfCompany, 1)
    // if(this.watchlists[wIndex].companies.find(c => company == c))
    //   this.watchlists[wIndex].companies.splice(this.watchlists[wIndex].companies.indexOf(company),1)
  }

  createWatchlist(name: string){
    const watchlist: Watchlist = {id: this.generateId(this.watchlists), name, companies:[]}
    this.watchlists.push(watchlist)
  }

  editWatchlist(id: number, name: string){
    this.getWatchlist(id).name = name
    // this.watchlists[i].name = name
  }

  deleteWatchlist(id: number){
    this.watchlists.splice(this.watchlists.indexOf(this.getWatchlist(id)), 1)
  }

  generateId(array){
    const ids: number[] = array.map(i => i.id)
    var id: number = 0
    ids.length != 0 
      ? id = Math.max(...ids) + 1 
      : id = 1
    return id
  }
}
