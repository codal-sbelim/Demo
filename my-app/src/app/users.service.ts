import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  private userUrl = 'api/users';

  constructor(
    private http: HttpClient
  ) { }

  /* Get users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

}