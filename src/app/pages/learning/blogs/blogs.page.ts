import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';
import { Blog } from 'src/app/models/blog.model';
import { Marubozu } from 'src/app/models/marubozu.model';
import { LearningService } from 'src/app/services/learning.service';
import { MarubozuService } from 'src/app/services/marubozu.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  blogs: Blog[]
  blgs: Marubozu[]
  constructor(private learningService: LearningService, 
    private modalController: ModalController,
    private marubozuService: MarubozuService) { }

  ngOnInit() {
    this.blogs = this.learningService.blogs
    this.marubozuService.get('blog').subscribe((r:any) => {
      console.log('blog',r)
      this.blgs = r.data
    })
  }

  async openPostModal(blog) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog}
    });
    return await modal.present();
  }
}
