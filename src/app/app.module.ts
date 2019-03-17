import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsService } from './services/blogs.service';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BloglistComponent,
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
