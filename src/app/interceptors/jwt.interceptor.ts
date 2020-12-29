import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockService } from '../services/stock.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private stockService: StockService, private userService: UserService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token
        this.userService.authenticated.subscribe((r:any) => {
            token = r.token
        })
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
        return next.handle(req);
    }
}