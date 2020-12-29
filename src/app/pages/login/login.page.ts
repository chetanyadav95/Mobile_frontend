import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  result: any
  userInfo: any
  constructor(private router: Router, private userService: UserService, private googlePlus: GooglePlus) { }

  ngOnInit() {
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }

  login(form: NgForm){
    this.userService.logIn(form.value).subscribe((res:any) => {
      const user: User = this.generateUser(res)
      localStorage.setItem('token', res.jwt);
      this.userService.authenticate(user, res.jwt)
      this.userService.decodedToken = this.userService.decodeToken(res.jwt)
      form.resetForm()
      this.router.navigate(['home','dashboard'])
      this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard')
    })
  }

  generateUser(res){
    let user: User = {
      email: res.user.email,
      username: res.user.username,
      balance: {
        availableBal: 0,
        openBal: 0,
      }
    }
    this.userService.accountDetails().subscribe((r: any) => {
      user.balance.availableBal = r.account.initialAmount
      user.balance.openBal = parseFloat(r.account.currentBalance)
      user.balance.currency = r.account.currency
    }, () => {}, () => this.userService.user.next(user))
    return user
  }

  async google(){
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    // this.userService.googleAuth().subscribe()
  }

  forgotPassword(form: NgForm){
    const email = form.value.email
    this.userService.emailExists(email).subscribe(r => console.log(r))
  }

  //     authentication:
  // accessToken: "ya29.a0AfH6SMBwVBSupO9LlDCT9MJd_kS8EwoCa2v4AXRU63RnErFSfG0PCyfCaru3EMblgGvORpdN1ny4hFJV9N2_Kz-xGtMSrvtRLrUEm5mRuf4yJDdLuDtOv4ijTLIptKB_xk6-nlwcPdX1_kZqI4PVoAaBY_HgG4I5_VZIl-3ctWw"
  // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhZGMxMDFjYzc0OThjMDljMDEwZGMzZDUxNzZmYTk3Yzk2MjdlY2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQ2MTg0OTYwNjMyLWY4YXV0czlqdjg0cXIwNXNpamgzdGtpMjYwOHU1c2VmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQ2MTg0OTYwNjMyLWY4YXV0czlqdjg0cXIwNXNpamgzdGtpMjYwOHU1c2VmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxMDc3MTM0ODE4NjAyMTA5ODQ0IiwiZW1haWwiOiJzZWZlcmlicmFoaW0yQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTGNobUxMMlFTNUdMdXJYUGFQR01mUSIsIm5hbWUiOiJJYnJhaGltIFNlZmVyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdqVkRZVU5JakIyNThWTTJsMmNuUEhlUUM3MTdFbFdxUllrNlhfbHZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IklicmFoaW0iLCJmYW1pbHlfbmFtZSI6IlNlZmVyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MDg5MjMxODksImV4cCI6MTYwODkyNjc4OSwianRpIjoiMDUxNTA1YjIwNGE0ZGY0MmE2MWZjMWM3ZTVmMTQxNmVmMjlkNDg5YiJ9.chEyT-NXK-vNYHMKlBq2lbmQ8IAeqMIUUI_J9aeBiLUAspkeEXs1pcNv3iI4iLuwzbG2nLPT5l0A2MdRKbo8CrRPONzEHPcOj_ALt75h2O8p2JV6D5fFRAOdgnVuFd5Mcov1RenY4ZPVOnWuZZ_SmWtMF0for0RY7_PwL9zMgUsztZBVyxuqsUOiY8wAxm6dMXcPGmtJdSAXhMEHYQmEKuCQCXazulWP--IZboknLjoYYrKRcsu0UqmaiMInMdT-A7mVEAxZ1IMRyWcX9SVAx-pa-7T8wERMLXkALW7s9q-zzAJq9oiOcPQNnbHOj9oq5CHo-hgfVLCtrr2O6tSmZQ"
  // __proto__: Object
  // email: "seferibrahim2@gmail.com"
  // familyName: "Sefer"
  // givenName: "Ibrahim"
  // id: "101077134818602109844"
  // imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GjVDYUNIjB258VM2l2cnPHeQC717ElWqRYk6X_lvw=s96-c"
  // name: "Ibrahim Sefer"
  // serverAuthCode: "4/0AY0e-g6FcCNd9I76FB6DdPunLPW9HOqw2WcfuQyspd9RgD2WzXrVqYLsd6Nghj3BzD88Jg"
}
