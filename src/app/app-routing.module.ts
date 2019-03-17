import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes:Routes=[
  { path:'',component:BloglistComponent },
  { path:'new', component:AddBlogComponent },
  { path: '**', redirectTo: '/new', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
