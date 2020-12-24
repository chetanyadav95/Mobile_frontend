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

  constructor(private http: HttpClient) { }

  getWatchlist(id: string){
    return this.http.get(this.apiUrl + id)
  }

  getSimulatedWatchlists(){
    return this.http.get(this.apiUrl + 'filter/simulated')
  }

  getRealtimeWatchlists(){
    return this.http.get(this.apiUrl + 'filter/realTime')
  }

  addToWatchlist(watchlistId, stockId){
    return this.http.put(this.apiUrl + 'add/stock', {watchlistId, stockId})
  }

  removeFromWatchlist(watchlistId: string, stockId: string){
    return this.http.put(this.apiUrl + 'stock/remove', {watchlistId, stockId})
  }

  createWatchlist(name: string){
    return this.http.post(this.apiUrl + 'new', {name})
  }

  updateWatchlistPositions(list){
    return this.http.put(this.apiUrl + 'update/watchlist/positions', {list})
  }

  updateWatchlistStocksPositions(watchlistId, stocks){
    return this.http.put(this.apiUrl + 'update/watchlist/stocks/positions', {watchlistId, stocks})
  }

  editWatchlist(id: string, name: string){
  }

  deleteWatchlist(id: string){
    return this.http.delete(this.apiUrl + id)
  }

  moveInArray(arr, prevIndex, currIndex){
    if (currIndex >= arr.length) {
      var k = currIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(currIndex, 0, arr.splice(prevIndex, 1)[0]);
    return arr; 
  }
}
