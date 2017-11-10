import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Users} from './Users';
import 'rxjs/add/operator/retry';

@Injectable()
export class UsersService {

  constructor(private http:HttpClient) { }



  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>('api/users').retry(3);
  }

    
      get(id : number):Observable<Users>{
        return this.http.get<Users> ('api/users/'+id).retry(3);
      }
    

}
