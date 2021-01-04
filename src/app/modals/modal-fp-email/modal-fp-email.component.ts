import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ModalFpCodeCheckComponent } from '../modal-fp-code-check/modal-fp-code-check.component';

@Component({
  selector: 'app-modal-fp-email',
  templateUrl: './modal-fp-email.component.html',
  styleUrls: ['./modal-fp-email.component.scss'],
})
export class ModalFpEmailComponent implements OnInit {
  email: string

  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  emailCheck(email){
    if(this.checkIfEmailInString(email)){
      this.userService.emailExists(this.email).subscribe(r => {
        console.log(r)
        this.dismissModal()
        this.openCodeCheckModal(email)
      })
    }
  }

  async openCodeCheckModal(email){
    const modal = await this.modalCtrl.create({
      component: ModalFpCodeCheckComponent,
      componentProps: {email}
    })
    return await modal.present()
  }

  checkIfEmailInString(text) { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

}
