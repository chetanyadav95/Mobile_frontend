import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }

  login(form: NgForm){
    this.userService.logIn(form.value).subscribe((res:any) => {
      localStorage.setItem('token', res.jwt)
      this.userService.decodedToken = res.jwt
      let user: User = {
        id: res.user._id,
        email: res.user.email,
        username: res.user.username,
        balance: {
          availableBal: 0,
          openBal: 0,
        }
      }
      this.userService.accountDetails().subscribe((res: any) => {
        user.balance.availableBal = res.account.initialAmount
        user.balance.openBal = parseFloat(res.account.currentBalance)
        user.balance.currency = res.account.currency
      })
      this.userService.user.next(user)
      form.resetForm()
      this.router.navigate(['home','dashboard'])
      this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard')
    })
  }
}
