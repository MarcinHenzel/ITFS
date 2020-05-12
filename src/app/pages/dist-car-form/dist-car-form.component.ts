import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dist-car-form',
  templateUrl: './dist-car-form.component.html',
  styleUrls: ['./dist-car-form.component.scss']
})
export class DistCarFormComponent implements OnInit {
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
  constructor(private formBuilder: FormBuilder, private initService: InitDataService) { }

  ngOnInit() {
    this.regList$ = this.initService.getRegs();
    this.costsList$ = this.initService.getCosts();
  }
  onSubmit(){

  }
}
