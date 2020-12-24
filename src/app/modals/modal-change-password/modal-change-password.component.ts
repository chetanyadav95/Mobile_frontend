import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.scss'],
})
export class ModalChangePasswordComponent implements OnInit {
  passwordsDontMatch: boolean
  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  changePassword(input){
    if(input.newPassword == input.confirmPassword){
      this.userService.changePassword(this.userService.user.email, input.newPassword).subscribe(res => {
        console.log(res)
      })
    }
    // if(this.userService.changePassword(input.newPassword, input.confirmPassword)) {
    //   this.userService.changePassword(input.newPassword, input.confirmPassword)
    //   this.dismissModal() 
    // } else this.passwordsDontMatch = false
  }
}
