import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchUsers(query: any): any {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`).pipe(
      map(user => ({
        ...user,
        fullName: `${user.firstName} ${user.lastName}`
      }))
    );
  }
}
