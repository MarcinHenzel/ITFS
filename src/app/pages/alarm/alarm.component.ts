import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  alarmForm: FormGroup = this.formBuilder.group({
    communique: ''
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  send() {
    console.log(this.alarmForm.value);
  }
  sendPPOZ() {
    console.log(this.alarmForm.value);
  }
  // TODO:
/*   onSubmit() {
    this.addService.addDeleg(this.addDelegForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  } */
}
