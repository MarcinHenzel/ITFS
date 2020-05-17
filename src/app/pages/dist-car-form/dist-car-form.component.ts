import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dist-car-form',
  templateUrl: './dist-car-form.component.html',
  styleUrls: ['./dist-car-form.component.scss']
})
export class DistCarFormComponent implements OnInit {
  server: any = {answer: '', status: null};
  regList$;
  costsList$;
  distCarForm: FormGroup = this.formBuilder.group({
    registrationNr: '',
    delegationNr: '',
    previousMileage: '',
    mileageChoice: '',
    kmTraveled: '',
    actualMileage: '',
    costs: '',
    comment: ''
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) { }

  ngOnInit() {
    this.regList$ = this.initService.getRegs();
    this.costsList$ = this.initService.getCosts();
  }
  onSubmit() {
    this.addService.addVehicle(this.distCarForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
}
