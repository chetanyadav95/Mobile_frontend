import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController, ModalController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Post } from 'src/app/models/post.model';
import { LearningService } from 'src/app/services/learning.service';
import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';

const STORAGE_KEY = 'assets';

@Component({
  selector: 'app-intra-day',
  templateUrl: './intra-day.page.html',
  styleUrls: ['./intra-day.page.scss'],
})
export class IntraDayPage implements OnInit {
  intraDayPosts: Post[]
 
  // images = [];
 
  constructor(private modalController: ModalController, private learningService: LearningService) { }

  ngOnInit() {
    this.intraDayPosts = this.learningService.intraDay
  }

  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {intraDay: true}
    });
    return await modal.present();
  }
  async openPostModal(intraDay) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog: intraDay}
    });
    return await modal.present();
  }
}
