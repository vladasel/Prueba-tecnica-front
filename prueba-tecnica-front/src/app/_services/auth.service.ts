import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REQUEST_TOKEN = "";
const AUTH_API = "https://www.themoviedb.org/authenticate/" + { REQUEST_TOKEN };

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
