import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeHistoryService {

  constructor(private baseService: BaseService, private http: HttpClient) { }

  apiUrl = environment.apiUrl + 'stocks/history/'
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
const stockId = '5fe2f69dc47d3374729430fe';
    // return this.baseService.getLocalMockData(mockUrl).pipe(
        // return  this.http.get(`${this.baseUrl}${url}`,{params:qs}).pipe(
        return this.http.get(`${this.apiUrl}${stockId}`).pipe(
          map(res => {
            // return res.json();
            return res;
          }),
          catchError(this.handleError)
        )
		
  }

}
