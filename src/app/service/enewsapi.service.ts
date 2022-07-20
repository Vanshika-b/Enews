import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EnewsapiService {

  constructor(private _http:HttpClient) { }

  //top headlines api url
  topHeadLinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=81603dd50026441aab89fb53b6730731';
  //tech news
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81603dd50026441aab89fb53b6730731';
  //business news
  businessdata='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=81603dd50026441aab89fb53b6730731';
  
  //use business method
  businews():Observable<any>{
    return this._http.get(this.businessdata)
  }
  //use tech method
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)
  }
  eHeadLines(): Observable<any>{
return this._http.get(this.topHeadLinesNews)
  }
}
