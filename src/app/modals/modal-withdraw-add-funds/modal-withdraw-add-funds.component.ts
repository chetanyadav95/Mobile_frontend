import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-withdraw-add-funds',
  templateUrl: './modal-withdraw-add-funds.component.html',
  styleUrls: ['./modal-withdraw-add-funds.component.scss'],
})
export class ModalWithdrawAddFundsComponent implements OnInit {
  @Input('isAdd') isAdd: boolean
  user: User
  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {
    this.userService.authenticated.subscribe(u => this.user = u.user)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  submitFundsRequest(input){
    this.isAdd
      ? this.userService.add(input.amount)
      : this.userService.withdraw(input.amount)
    this.dismissModal()
  }
}
