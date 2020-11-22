import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-intra-day',
  templateUrl: './intra-day.page.html',
  styleUrls: ['./intra-day.page.scss'],
})
export class IntraDayPage implements OnInit {
  intraDayPosts: Post[]
  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.intraDayPosts = this.learningService.intraDay
  }

}
