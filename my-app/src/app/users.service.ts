import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({'Çontent-Type' : 'application/json'})
}

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
  
  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }
}