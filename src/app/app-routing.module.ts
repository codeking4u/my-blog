import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

const routes:Routes=[
  { path:'',component:BloglistComponent },
  { path:'new', component:AddBlogComponent },
  { path: 'blog/:id', component: BlogPageComponent},
  { path: '**', redirectTo: '/new', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule,FormsModule],
})
export class AppRoutingModule { }
