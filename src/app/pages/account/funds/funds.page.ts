import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalWithdrawAddFundsComponent } from 'src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.page.html',
  styleUrls: ['./funds.page.scss'],
})
export class FundsPage implements OnInit {
  user: User
  constructor(private router: Router, private modalController: ModalController, private userService: UserService) { }

  ngOnInit() {
    this.userService.authenticated.subscribe(u => this.user = u.user)
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }

  async openWithdrawAddFundsModal(isAdd: boolean) {
    const modal = await this.modalController.create({
      component: ModalWithdrawAddFundsComponent,
      componentProps: {isAdd}
    });
    return await modal.present();
  }
}
