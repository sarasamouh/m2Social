import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  onstructor(private http:HttpClient) { }
  
  
  
    getAll(): Observable<Posts[]> {
      return this.http.get<Posts[]>('api/posts').retry(3);
    }
  
      
        get(id : number):Observable<Posts>{
          return this.http.get<Posts> ('api/posts/'+id).retry(3);
        }

}
