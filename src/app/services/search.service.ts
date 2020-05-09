import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {
  }
  getData(value, {lookFor, by}) {
    console.log(lookFor, by);
    return this.http.get(`${this.baseUrl}/search-${lookFor}/`, {params: {value, by}});
  }
}
