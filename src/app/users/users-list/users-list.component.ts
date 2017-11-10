import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

users: Users[];
  

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(users => this.users = users);
  }

}
