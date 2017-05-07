/**
 * Created by Iqbaldeep_Singh on 3/4/2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from '../user-module/models/user';

@Injectable()
export class UserService {

  // private usersUrl = 'http://138.68.224.242:8080/v1/users';  // URL to web api
  // private addUserUrl = 'http://138.68.224.242:8080/v1/addUser';
  private usersUrl = 'http://localhost:8080/v1/users';  // URL to web api
  private addUserUrl = 'http://localhost:8080/v1/addUser';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAllUsers(): Observable<User[]> {
    this.headers.append('interactionId', '12345678');
    //noinspection TypeScriptValidateTypes
    return this.http.get(this.usersUrl, {headers: this.headers})
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  create(user: User): Promise<User> {
    this.headers.append('interactionId', '12345678');
    return this.http
      .post(this.addUserUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}
