import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import{HttpClientModule} from '@angular/common/http';
import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import {Routes, RouterModule} from'@angular/router';
import { RootComponent } from './root/root.component';
import{FormsModule}from '@angular/forms';


const appRoute: Routes = [
  { path: 'users', component: RootComponent ,

 children :[{
   path:':id',
   component : UsersComponent
 },
 {
   path:'',
   component : UsersListComponent },
   

 ]

}]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: [
    RootComponent,
    UsersComponent,
    RootComponent,
    UsersListComponent
  ],
  exports:[
    RootComponent
  ],
  providers:[UsersService]
})
export class UsersModule { }
