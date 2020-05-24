import { AddService } from './../../services/add.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  server: any = {answer: '', status: null};
  addCarForm: FormGroup = this.formBuilder.group({
    registerNr: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    mileage: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private addService: AddService) {}

  ngOnInit() {
  }
  onSubmit() {
    if (this.addCarForm.invalid) {
      this.server.status = 'All fields are required';
      return;
    }
    this.addService.addVehicle(this.addCarForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
}
