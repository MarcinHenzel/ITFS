import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {
  }
  getData(value, {lookFor, by}) {
    return this.http.get(`${environment.apiUrl}/search-${lookFor}/`, {params: {value, by}});
  }
}
