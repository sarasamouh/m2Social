import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { RootPostsComponent } from './root-posts/root-posts.component';


const postsRouter:Routes =[
  {
    path :'',
    component :PostsComponent,
    children :[{
      path :'Add',
      component :AddPostsComponent
    }]
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRouter)
  ],
  declarations: [PostsComponent,AddPostsComponent, RootPostsComponent]
})
export class PostsModule { }
