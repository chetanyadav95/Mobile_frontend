import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  blogs: Blog[]
  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.blogs = this.learningService.blogs
  }

}
