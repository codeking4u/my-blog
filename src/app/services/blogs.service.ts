import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable()
export class BlogsService {
  blogsURL = 'https://5c8a6f760861d300146f73eb.mockapi.io/api/blogs';
  constructor( private http:HttpClient) { }
  getPosts(page):Observable<any>{
    return this.http.get(this.blogsURL+'?page='+page+'&limit=10');
    
  }
  addBlog(data):Observable<any>{
    return this.http.post(this.blogsURL,data,httpOptions);
  }

  viewBlog(id):Observable<any>{
    return this.http.get(this.blogsURL+'/'+id);
  }
}
