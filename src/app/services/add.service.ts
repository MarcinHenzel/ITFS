import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  baseUrl = 'http://localhost:3000'
  headers = new HttpHeaders()
  .set('Authorization', 'my-auth-token')
  .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  addDeleg(body) {
    return this.add(body, 'addDeleg');
  }
  addMileage(body) {
    return this.add(body, 'addMileage');
  }
  addVehicle(body) {
    return this.add(body, 'addVehicle');
  }
  addOffice(body) {
    return this.add(body, 'addOffice');
  }
  addWindows(body) {
    return this.add(body, 'addWindows');
  }
  private add(body, url) {
    return this.http.post(`${this.baseUrl}/${url}`, {body: body});
  }
}
