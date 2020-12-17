import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from "@auth0/angular-jwt";
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://104.198.233.233/api/v1/auth/"
  user: User
  decodedToken

  isOnLoginOrSignUpPage = new Subject<boolean>()
  constructor(private router: Router, private http: HttpClient) { }

  decodeToken(token){
    const helper = new JwtHelperService();
    this.decodedToken = helper.decodeToken(token);
    console.log(this.decodedToken)
  }

  logIn(input){
    return this.http.post(this.apiUrl + "login", input)
  }

  signUp(input){
    return this.http.post(this.apiUrl + "signup", input)
  }

  googleAuth(){
    return this.http.get(this.apiUrl + 'google')
  }

  logout(){
    this.user = null
    localStorage.removeItem('token')
  }

  add(amount: number){
    this.user.balance.openBal += amount
    this.user.balance.availableBal += amount
  }
  
  withdraw(amount: number){
    if((this.user.balance.openBal - amount) >= 0)
      this.user.balance.openBal -= amount
    if((this.user.balance.availableBal - amount) >= 0)
      this.user.balance.availableBal -= amount
  }

  checkIfIsOnLoginOrSignUpPage(link: string){
    link.includes('login') || link.includes('sign-up')
      ? this.isOnLoginOrSignUpPage.next(true)
      : this.isOnLoginOrSignUpPage.next(false)
  }
}
