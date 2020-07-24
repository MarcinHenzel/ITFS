import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class InitDataService {

  constructor(private http: HttpClient) { }
  getCosts() {
    return this.http.get(`/api/getCosts`);
  }
  getRegs() {
    return this.http.get(`/api/getRegs`);
  }
  getOffices() {
    return this.http.get(`/api/getOffices`);
  }
  getWindows() {
    return this.http.get(`/api/getWindows`);
  }
}
