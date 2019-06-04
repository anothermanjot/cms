import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken: string;
  constructor(private http: HttpClient) {
    console.log('hello');
    this.login().toPromise()
    .then(r => {
      console.log(r);
      this.authToken = r.headers.get('X-AUTH-TOKEN');
      sessionStorage.setItem('token', this.authToken);
    });
   }

   login() {
    return this.http.post('/api/login', {
      email: 'admin.tatasky@gmail.com',
      password: 'tatasky@123'
    }, {
      observe: 'response'
    });
   }

  getAll(isEnabled: boolean): Observable<Array<User>> {
    if (this.authToken) {
    return this.http.post<any>('/admin/user/list/' + isEnabled, {})
    .pipe(map( r => r.data));
    } else {
     return  from(this.login().toPromise()
      .then(() => {
        return this.http.post<any>('/admin/user/list/' + isEnabled, {})
        .pipe(map( r => r.data)).toPromise();
      }));

    }
  }
}
