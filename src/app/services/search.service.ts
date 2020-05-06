import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {
    console.log('inieesesseestsss')
  }
  getDelegation(value, sortBy) {
    return this.http.get(`${this.baseUrl}/delegSearch/`, {params: {value, sortBy}});
  }
}
