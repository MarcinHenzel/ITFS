import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  constructor(private http: HttpClient) { }
  sendMessage(mes, validation) {
    return this.send(mes, 'sendMessage', validation);
  }
  sendFireAlarm(mes, validation) {
    return this.send(mes, 'sendFireAlarm', validation);
  }
  private send(body, url, validation) {
    const server: any = {};
    if (validation) {
      server.answer = 'Message content is required';
      server.status = false;
      return server;
    }
    this.http.post(`${environment.apiUrl}/${url}`, body).subscribe(res => {
      server.status = true;
      server.answer = 'Message has been sent succesfully';
    }, err => {
      server.answer = `${err}`;
      server.status = false;
    });
    return server;
  }
}
