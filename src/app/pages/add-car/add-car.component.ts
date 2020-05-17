import { AddService } from './../../services/add.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  server: any = {answer: '', status: null};
  addCarForm: FormGroup = this.formBuilder.group({
    registerNr: '',
    brand: '',
    model: '',
    mileage: ''
  });

  constructor(private formBuilder: FormBuilder, private addService:AddService) {}

  ngOnInit() {
    this.addCarForm.patchValue({registerNr: '213', brand: 'Merc'});
  }
  onSubmit() {
    this.addService.addVehicle(this.addCarForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
}
