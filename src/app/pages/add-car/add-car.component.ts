import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup = this.formBuilder.group({
    registerNr: '',
    brand: '',
    model: '',
    mileage: ''
  });
/*   addCarForm: FormGroup = new FormGroup({
    registerNr: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    mileage: new FormControl()
  }) */

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addCarForm.patchValue({registerNr: '213', brand: 'Merc'});
  }
  onSubmit() {
    console.log(this.addCarForm.value);

  }
}
