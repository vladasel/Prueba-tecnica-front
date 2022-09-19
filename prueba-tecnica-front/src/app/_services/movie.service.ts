import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';


const url="https://api.themoviedb.org/3/movie/";
const api_key="api_key=23930918f792e686851ddb83295daee2";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getPopularMovie():Observable<Movies[]>{
    return this.http.get<any[]>(url+"popular?"+api_key+ "&language=es-ES");

  }
}
