import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: User
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(u => this.user = u)
    this.userService.accountDetails().subscribe()
  }

  logout(){
    this.userService.logout()
    this.router.navigate(['home','login'])
    this.userService.checkIfIsOnLoginOrSignUpPage('/home/login')
  }

  hasNoImgUrl(){
    if(this.user.imgUrl.length == 2) return true
    else return false
  }
}
