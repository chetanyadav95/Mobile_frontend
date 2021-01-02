import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { LearningService } from 'src/app/services/learning.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ModalController } from '@ionic/angular';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';
import { MarubozuService } from 'src/app/services/marubozu.service';
import { Marubozu } from 'src/app/models/marubozu.model';

@Component({
  selector: 'app-positional',
  templateUrl: './positional.page.html',
  styleUrls: ['./positional.page.scss'],
})
export class PositionalPage implements OnInit {
  positionalPosts: Post[]
  positionalPsts: Marubozu[]
  filteredPositional: Marubozu[]
  constructor(private modalController: ModalController,
    private learningService: LearningService, 
    private marubozuService: MarubozuService) { }

  ngOnInit() {
    this.positionalPosts = this.learningService.positional
    this.marubozuService.get('positional').subscribe((r: any) => {
      console.log('positional',r)
      this.positionalPsts = r.data
    })
  }

  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {positional: true}
    });
    return await modal.present();
  }
  async openPostModal(positional) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog: positional}
    });
    return await modal.present();
  }

  filter(e){
    this.filteredPositional = this.positionalPsts.filter(p => p.title.toLowerCase().includes(e.detail.value.toLowerCase()))
  }
}
