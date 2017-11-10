import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../Users';
import { UsersService } from '../Users.service';
import {ActivatedRoute , ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]  
})
export class UsersComponent implements OnInit {
 
  @Input() users:Users;
  constructor(private routes: ActivatedRoute ,private service: UsersService) { }

  ngOnInit(): void {
    this.routes.paramMap.switchMap(
      (params:ParamMap) =>{
      return this.service.get(+params.get('id')+1);
}).subscribe(users => this.users = users)
    ;
  }

}
