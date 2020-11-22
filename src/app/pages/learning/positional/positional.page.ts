import { LearningService } from 'src/app/services/learning.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-positional',
  templateUrl: './positional.page.html',
  styleUrls: ['./positional.page.scss'],
})
export class PositionalPage implements OnInit {
  positionalPosts: Post[]
  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.positionalPosts = this.learningService.positional
  }

}
