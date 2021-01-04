import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ModalChangePasswordComponent } from '../modal-change-password/modal-change-password.component';

@Component({
  selector: 'app-modal-fp-code-check',
  templateUrl: './modal-fp-code-check.component.html',
  styleUrls: ['./modal-fp-code-check.component.scss'],
})
export class ModalFpCodeCheckComponent implements OnInit {
  @Input('email') email: string
  code: string

  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  codeCheck(email, code){
    // this.userService.checkCodeValid(email, code).subscribe(r => {
    this.dismissModal()
    this.openChangePasswordModal()
    // })
  }

  async openChangePasswordModal(){
    const modal = await this.modalCtrl.create({
      component: ModalChangePasswordComponent
    })
    return await modal.present()
  }
}
