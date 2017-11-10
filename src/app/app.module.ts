import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UsersComponent } from './users/users/users.component';
import { UsersModule } from './users/users.module';
import { RouterModule , Routes } from '@angular/router';


const routes : Routes =[{
  
    path :'admin',
    loadChildren :'app/posts/posts.module#PostsModule'
  }]

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
