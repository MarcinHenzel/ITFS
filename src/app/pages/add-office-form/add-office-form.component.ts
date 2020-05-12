import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-office-form',
  templateUrl: './add-office-form.component.html',
  styleUrls: ['./add-office-form.component.scss']
})
export class AddOfficeFormComponent implements OnInit {
  offices$;
  addOfficeForm: FormGroup = this.formBuilder.group({
    pcName: '',
    productName: '',
    productKey: '',
    registerMail: '',
    activationDate: ''
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService) { }

  ngOnInit() {
    this.offices$ = this.initService.getOffices();
  }
  onSubmit() {
    console.log(this.addOfficeForm.value);
  }
}
