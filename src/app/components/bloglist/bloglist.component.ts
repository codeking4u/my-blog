import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs=[];
  page:number= 1;
  constructor(private blogsService:BlogsService) { }

  ngOnInit() {
    this.blogsService.getPosts(this.page).subscribe(bloglists=>{
      console.log(bloglists)
      this.blogs = this.blogs.concat(bloglists);
      
    });
  }
  loadMore(){
    this.page = this.page+1;
  }
  
}
