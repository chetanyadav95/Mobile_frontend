import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalChangePasswordComponent } from 'src/app/modals/modal-change-password/modal-change-password.component';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User
  constructor(private router: Router, private modalController: ModalController, private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(u => this.user = u)
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }

  async openCompaniesModal(id) {
    const modal = await this.modalController.create({
      component: ModalChangePasswordComponent,
      // componentProps: {selectedWatchlist: id}
    });
    return await modal.present();
  }

  hasNoImgUrl(){
    if(this.user.imgUrl.length == 2) return true
    else return false
  }
}
