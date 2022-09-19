import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../models/series.model';


const url="https://api.themoviedb.org/3/tv/";
const api_key="api_key=23930918f792e686851ddb83295daee2";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }

  getPopularSerie():Observable<Series[]>{
    return this.http.get<any[]>(url+"popular?"+api_key+ "&language=es-ES");
  }




  getSerie(id: any): Observable<Series> {
    return this.http.get<any>(url + id + "?" + api_key + "&language=es-ES")
  }

}
