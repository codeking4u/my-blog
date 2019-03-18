import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service'

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  submitted:boolean=false;
  constructor(private service:BlogsService) { }
  blog;
  ngOnInit() {
    
  }
  onSubmit(){
    this.submitted=true;
    this.blog={
    userid: 1,
    name: 'titleee',
    tags: 'tag',
    likes: 0,
    description: 'descc'
    }
    this.service.addBlog(this.blog).subscribe(data=>{
      return '';
    })
    console.log('submitted');
  }
}
