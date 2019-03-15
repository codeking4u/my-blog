import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BlogsService {
  blogsURL = 'https://5c8a6f760861d300146f73eb.mockapi.io/api/blogs';
  constructor( private http:HttpClient) { }
  getPosts(page):Observable<any>{
    return this.http.get(this.blogsURL+'?page='+page+'&limit=10');
    
  }
}
