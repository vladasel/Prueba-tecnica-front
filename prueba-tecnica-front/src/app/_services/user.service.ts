import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY="23930918f792e686851ddb83295daee2";
const AUTH_API=": https://developers.themoviedb.org/3"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(AUTH_API + 'all'+API_KEY, { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(AUTH_API + 'user'+API_KEY, { responseType: 'text' });
  }
}
