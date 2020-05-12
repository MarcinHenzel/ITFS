import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitDataService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';
  getCosts() {
    return this.http.get(`${this.baseUrl}/getCosts`);
  }
  getRegs() {
    return this.http.get(`${this.baseUrl}/getRegs`);
  }
  getOffices() {
    return this.http.get(`${this.baseUrl}/getOffices`);
  }
  getWindows() {
    return this.http.get(`${this.baseUrl}/getWindows`);
  }
}
