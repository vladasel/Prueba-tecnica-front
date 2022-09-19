import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = "23930918f792e686851ddb83295daee2";
const AUTH_API = "https://api.themoviedb.org/3/authentication/token/new?api_key="+{API_KEY};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user: any = null;

  login(username: string, password: string): Observable<any> {

    this.user = null;

    this.user = {
      "username": username,
      "password": password
    };
    console.log(JSON.stringify(this.user));
    return this.http.post(AUTH_API + 'login', JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json' } });
  }



}
