import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TradeHistoryService {

  constructor(private http: Http, private baseService: BaseService) { }
  // baseUrl = 'https://min-api.cryptocompare.com';
  baseUrl = 'https://empuraan.com/';
  handleError(error : Response) {
      console.error(error);
      return throwError(error);
  }
  
  getBars(symbolInfo, resolution, from, to, first, limit):Observable<any> {
    var split_symbol = symbolInfo.name.split(/[:/]/);
			const url = resolution === 'D' ? '/data/histoday' : parseInt(resolution) >= 60 ? '/data/histohour' : '/data/histominute'
			const qs = {
					e: split_symbol[0],
					fsym: split_symbol[1],
					tsym: split_symbol[2],
					toTs:  to ? to : '',
					limit: limit ? limit : 2000
        }
const mockUrl = 'api/v1/stocks/history/5fe2f69dc47d3374729430fe';
    // return this.baseService.getLocalMockData(mockUrl).pipe(
        // return  this.http.get(`${this.baseUrl}${url}`,{params:qs}).pipe(
        return this.baseService.getData(`${this.baseUrl}${mockUrl}`, {}).pipe(
          map(res => {
            // return res.json();
            return res;
          }),
          catchError(this.handleError)
        )
		
  }

}
