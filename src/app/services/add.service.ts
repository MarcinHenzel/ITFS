import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  addDeleg(body, validation) {
    return this.add(body, 'addDeleg', validation);
  }
  addMileage(body, validation) {
    return this.add(body, 'addMileage', validation);
  }
  addVehicle(body, validation) {
    return this.add(body, 'addVehicle', validation);

  }
  addOffice(body, validation) {
    return this.add(body, 'addOffice', validation);
  }
  addWindows(body, validation) {
    return this.add(body, 'addWindows', validation);
  }
  private add(body, url, validation) {
    const server: any = {};
    if (validation) {
      server.answer = 'All fields are required';
      server.status = false;
    } else {
      this.http.post(`${environment.apiUrl}/${url}`, body).subscribe(res => {
        server.status = true;
        server.answer = 'Record has been added succesfully';
      }, err => {
        server.answer = `${err}`;
        server.status = false;
      });
    }
    return server;
  }
}
