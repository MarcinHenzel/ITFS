import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {
    console.log('inieesesseestsss')
  }
  getDelegation(value) {
    return this.http.get(`${this.baseUrl}/delegSearch/:${value}`);
  }
}
