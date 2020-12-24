import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/stock.model';
import { Watchlist } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  apiUrl = environment.apiUrl + 'watchlist/'
  updatedWatchlist = new Subject<boolean>()
  // companies: Stock[] = [
  //   {
  //     id: 1,
  //     name: 'AAA',
  //     code: 'AAA',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 2,
  //     name: 'BBB',
  //     code: 'BBB',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 3,
  //     name: 'CCC',
  //     code: 'CCC',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },

  //   {
  //     id: 4,
  //     name: 'DDD',
  //     code: 'DDD',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 5,
  //     name: 'EEE',
  //     code: 'EEE',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },

  //   {
  //     id: 6,
  //     name: 'FFF',
  //     code: 'FFF',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },

  //   {
  //     id: 7,
  //     name: 'GGG',
  //     code: 'GGG',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },

  //   {
  //     id: 8,
  //     name: 'HHH',
  //     code: 'HHH',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 9,
  //     name: 'III',
  //     code: 'III',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 10,
  //     name: 'JJJ',
  //     code: 'JJJ',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 11,
  //     name: 'Infosys',
  //     code: 'Infy',
  //     greenNum: 92.90,
  //     rateRaw: 4.00,
  //     isRising: true,
  //     ratePercentage: 4.50
  //   },
  //   {
  //     id: 12,
  //     name: 'Niftybees',
  //     code: 'Nifty',
  //     greenNum: 958.10,
  //     isRising: true,
  //     rateRaw: 18.25,
  //     ratePercentage: 1.94
  //   },
  //   {
  //     id: 13,
  //     name: 'Tesla Motors',
  //     code: 'Tsla',
  //     greenNum: 119.85,
  //     isRising: false,
  //     rateRaw: 5.05,
  //     ratePercentage: 4.40
  //   },
  //   {
  //     id: 14,
  //     name: 'Apple Inc.',
  //     code: 'Aapl',
  //     greenNum: 2102.35,
  //     isRising: true,
  //     rateRaw: 42.30,
  //     ratePercentage: 2.05
  //   },
  //   {
  //     id: 15,
  //     name: 'McDonalds',
  //     code: 'MCDS',
  //     greenNum: 128.25,
  //     isRising: false,
  //     rateRaw: 1.55,
  //     ratePercentage: 1.22
  // }]
  // watchlists: Watchlist[] = [
  //   {
  //     id: 1,
  //     name: 'Trending',
  //     companies: [
  //       this.companies[0],
  //       this.companies[1],
  //       this.companies[2],
  //       this.companies[3],
  //       this.companies[4],
  //       this.companies[5],
  //       this.companies[6],
  //       this.companies[7],
  //       this.companies[8],
  //       this.companies[9],
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'W1',
  //     companies: [
  //       this.companies[10],
  //       this.companies[11],
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'W2',
  //     companies: [
  //       this.companies[12],
  //       this.companies[13],
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'W3',
  //     companies: [
  //       this.companies[14],
  //     ]
  //   }]
  constructor(private http: HttpClient) { }

  getWatchlist(id: string){
    // return this.watchlists.find(w => w.id == id)
    return this.http.get(this.apiUrl + id)
  }

  getUserWatchlists(){
    return this.http.get(this.apiUrl)
  }

  updateWatchlist(newWatchlist){
    // this.watchlists = newWatchlist
  }

  addToWatchlist(id: string, company: Stock){
    // needs to be a update watchlist method
    // this.getWatchlist(id).companies.push(company)
  }

  removeFromWatchlist(id: string, company: Stock){
    let watchlist
    this.getWatchlist(id).subscribe(res => watchlist = res)
    const indexOfStock = watchlist.companies.indexOf(company)
    watchlist.companies.splice(indexOfStock,1)
    //update watchlist
  }

  createWatchlist(name: string){
    // const watchlist: Watchlist = {id: this.generateId(this.watchlists), name, companies:[]}
    // this.watchlists.push(watchlist)
    return this.http.post(this.apiUrl + 'new', {name})
  }

  editWatchlist(id: string, name: string){
    // this.getWatchlist(id).name = name
  }

  deleteWatchlist(id: string){
    // this.watchlists.splice(this.watchlists.indexOf(this.getWatchlist(id)), 1)
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
