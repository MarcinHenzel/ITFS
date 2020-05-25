import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http: HttpClient) { }
  sendMessage(mes) {
    return this.http.post(`${environment.apiUrl}/sendMessage`, mes);
  }
  sendFireAlarm(mes) {
    return this.http.post(`${environment.apiUrl}/sendfireAlarm`, mes);
  }
}
