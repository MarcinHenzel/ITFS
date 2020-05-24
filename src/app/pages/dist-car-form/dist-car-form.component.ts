import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dist-car-form',
  templateUrl: './dist-car-form.component.html',
  styleUrls: ['./dist-car-form.component.scss']
})
export class DistCarFormComponent implements OnInit, OnDestroy {
  server: any = {answer: '', status: null};
  sub: Subscription;
  regList$;
  costsList$;
  distCarForm: FormGroup = this.formBuilder.group({
    registrationNr: new FormControl('', [Validators.required]),
    delegationNr:  new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}\/[0-9]{2}\/.*')]),
    previousMileage:  new FormControl('', [Validators.required]),
    mileageChoice:  new FormControl('', [Validators.required]),
    kmTraveled: new FormControl('', [Validators.required]),
    actualMileage:  new FormControl('', [Validators.required]),
    costs:  new FormControl('', [Validators.required]),
    comment:  new FormControl('')
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) { }

  ngOnInit() {
    this.regList$ = this.initService.getRegs();
    this.costsList$ = this.initService.getCosts();
    this.sub = this.distCarForm.get('mileageChoice').valueChanges.subscribe(val => {
      if (val === 'opt2') {
        this.distCarForm.get('actualMileage').enable();
        this.distCarForm.get('kmTraveled').disable();
      } else {
        this.distCarForm.get('kmTraveled').enable();
        this.distCarForm.get('actualMileage').disable();
      }
    })
  }
  onSubmit() {
    if (this.distCarForm.invalid) {
      this.server.status = 'All fields are required';
      return;
    }
    this.addService.addMileage(this.distCarForm.value).subscribe(res => {
      this.server.status = true;
    }, err => {
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
