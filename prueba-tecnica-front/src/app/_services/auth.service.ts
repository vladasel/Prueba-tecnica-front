import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = "23930918f792e686851ddb83295daee2";
const AUTH_API = "https://api.themoviedb.org/3/authentication/token/new?api_key=";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user: any = null;

  login(email: string, password: string): Observable<any> {

    this.user = null;

    this.user = {
      "username": email,
      "password": password
    };
    console.log(JSON.stringify(this.user));
    return this.http.post(AUTH_API +API_KEY, JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json' } });
  }



}
