import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs:Blog[];
  constructor() { }

  ngOnInit() {
    this.blogs = [
      {
        id: 1,
        userid: 12,
        avatar: 'string',
        name: 'name1',
        blogimage: 'any1',
        tags: 'tag',
        likes: '2',
        description: 'This is post 1 content'
      },
      {
        id: 2,
        userid: 12,
        avatar: 'string',
        name: 'name1',
        blogimage: 'any1',
        tags: 'tag',
        likes: '2',
        description: 'This is post 2 content'
      },
      {
        id: 3,
        userid: 12,
        avatar: 'string',
        name: 'name1',
        blogimage: 'any1',
        tags: 'tag',
        likes: '2',
        description: 'This is post 3 content'
        ,
        {
          id: 4,
          userid: 12,
          avatar: 'string',
          name: 'name1',
          blogimage: 'any1',
          tags: 'tag',
          likes: '2',
          description: 'This is post 4 content'
        }
  
}
