import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Input } from 'hammerjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }

  signUp(form: NgForm){
    if(this.checkIfPasswordsMatch(form.value.password, form.value.confirmPassword)){
      delete form.value.confirmPassword
      this.userService.signUp(form.value).subscribe((res: any) =>{
        console.log(res)
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
          user.balance.availableBal = res.account.initialValue
          user.balance.openBal = parseFloat(res.account.currentBalance)
          user.balance.currency = res.account.currency
        })
        this.userService.user = user
        form.resetForm()
        this.router.navigate(['home','login'])
        this.userService.checkIfIsOnLoginOrSignUpPage('/home/login')
      })
    }
  }

  checkIfPasswordsMatch(password, confirmPassword){
    if(password === confirmPassword) return true
    else return false
  }
}
