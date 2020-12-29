import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { MarubozuService } from 'src/app/services/marubozu.service';
import { Marubozu } from 'src/app/models/marubozu';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';

@Component({
  selector: 'app-demo-trading',
  templateUrl: './demo-trading.page.html',
  styleUrls: ['./demo-trading.page.scss'],
})
export class DemoTradingPage implements OnInit {
  demotrading: Marubozu[]
  constructor(private modalController: ModalController, private marubozuService: MarubozuService) { }

  ngOnInit() {
    this.marubozuService.get('demotrading').subscribe((r: any) => {
      console.log('demotrading',r)
      this.demotrading = r.data
    })
  }

  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {demotrading: true}
    });
    return await modal.present();
  }
  async openPostModal(demotrading) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog: demotrading}
    });
    return await modal.present();
  }

}
