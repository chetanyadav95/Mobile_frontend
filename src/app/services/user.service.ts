import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl + "auth/"
  apiSettingsUrl: string = environment.apiUrl + "settings"
  user = new BehaviorSubject<User>(null)
  authenticated = new BehaviorSubject<any>(false)
  decodedToken
  isOnLoginOrSignUpPage = new Subject<boolean>()

  constructor(private http: HttpClient, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(()=>{
      this.checkToken()
    })
  }

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

  accountDetails(){
    return this.http.get(this.apiUrl + 'account')
  }

  changePassword(email: string, password: string){
    return this.http.post(this.apiUrl + 'password/change', {email, password})
  }

  emailExists(email: string){
    return this.http.post(this.apiUrl + 'password/reset/emailcheck', email)
  }

  checkCodeValid(email: string, code: string){
    return this.http.post(this.apiUrl + 'password/code/check', {email, code})
  }

  getSettings(){
    return this.http.get(this.apiSettingsUrl)
  }

  updateSettings(id: string, datatype: string, risk: number, leverage: string){
    return this.http.put(this.apiSettingsUrl, {id, datatype, risk, leverage:+leverage})
  }

  authenticate(user, token){
    return this.storage.set('token',{user, token}).then(r => this.authenticated.next({user, token}))
  }

  checkToken(){
    return this.storage.get('token').then(r => {
      if(r) {
        this.authenticated.next(r)
        this.user.next(r.user)
      }
    })
  }

  logout(){
    this.user.next(null)
    localStorage.removeItem('token')
    return this.storage.remove('token').then(r => this.authenticated.next(false))
  }

  add(amount: number){
    this.user.subscribe(u => {
      u.balance.openBal += amount
      u.balance.availableBal += amount
    })
  }
  
  withdraw(amount: number){
    this.user.subscribe(u => {
      if((u.balance.openBal - amount) >= 0)
        u.balance.openBal -= amount
      if((u.balance.availableBal - amount) >= 0)
        u.balance.availableBal -= amount
    })
  }

  checkIfIsOnLoginOrSignUpPage(link: string){
    link.includes('login') || link.includes('sign-up')
      ? this.isOnLoginOrSignUpPage.next(true)
      : this.isOnLoginOrSignUpPage.next(false)
  }
}
