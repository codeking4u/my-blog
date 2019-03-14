import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BloglistComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
