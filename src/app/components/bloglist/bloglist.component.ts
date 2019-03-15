import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs;
  constructor(private blogsService:BlogsService) { }

  ngOnInit() {
    this.blogsService.getPosts().subscribe(blogs=>{
      this.blogs=blogs;
    });
  }
  
}
