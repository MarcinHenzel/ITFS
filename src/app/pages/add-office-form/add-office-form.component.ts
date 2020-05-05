import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-office-form',
  templateUrl: './add-office-form.component.html',
  styleUrls: ['./add-office-form.component.scss']
})
export class AddOfficeFormComponent implements OnInit {
  addOfficeForm: FormGroup = this.formBuilder.group({
    pcName: '',
    productName: '',
    productKey: '',
    registerMail: '',
    activationDate: ''
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //pobrac productname list
  }
  onSubmit() {
    console.log(this.addOfficeForm.value);
  }
}
