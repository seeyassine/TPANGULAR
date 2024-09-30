import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser, IUserCredentials } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api';

  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http
      .post<IUser>(`${this.baseUrl}/signin`, credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));
  }

  signOut() {
    this.user.next(null);
  }
}
