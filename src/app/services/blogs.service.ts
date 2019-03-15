import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BlogsService {
  blogsURL = 'https://5c8a6f760861d300146f73eb.mockapi.io/api/blogs?page=1&limit=10';
  constructor( private http:HttpClient) { }
  getPosts():Observable<any>{
    console.log(this.http.get(this.blogsURL))
    return this.http.get(this.blogsURL);
    
  }
}
