import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  id:any;
  blogData:any;
  constructor(private activeRoute:ActivatedRoute, private service:BlogsService) { }

  ngOnInit() {
      this.activeRoute.params.subscribe(params => { this.id = params['id']; });
      this.service.viewBlog(this.id).subscribe(blog=>{
      this.blogData=blog;
    })
  }
  

}
