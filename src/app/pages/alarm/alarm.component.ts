import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlarmService } from 'src/app/services/alarm.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  server: any = { answer: '', status: null };
  alarmForm: FormGroup = this.formBuilder.group({
    message: new FormControl('', [Validators.required])
  })
  constructor(private formBuilder: FormBuilder, private alarmService: AlarmService) { }

  ngOnInit() {
  }
  send() {
    this.onSubmit('sendMessage');
  }
  sendFireAlarm() {
    this.onSubmit('sendFireAlarm');
  }
  onSubmit(func) {
    if (this.alarmForm.invalid) {
      this.server.status = 'Message is required';
      return;
    }
    this.alarmService[func](this.alarmForm.value).subscribe(res => {
      this.server.status = true;
    }, err => {
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
}
