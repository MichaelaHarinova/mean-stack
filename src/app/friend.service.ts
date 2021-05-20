import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FriendService {
  url = 'http://localhost:9001/addFriend';
  urlDel = 'http://localhost:9001/deleteFriend';
  constructor(
    private http: HttpClient,
  ) { }
  addFriend(friend: Friend ): Observable<any>{
    return this.http.post(this.url, friend);
  }
  deleteFriend(friend: Friend): Observable<any>{
    return this.http.post(this.urlDel, friend);
  }
}
