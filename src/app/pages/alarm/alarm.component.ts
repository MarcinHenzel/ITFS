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
  onSubmit(func) {
    this.server = this.alarmService[func](this.alarmForm.value, this.alarmForm.invalid);
  }
}
