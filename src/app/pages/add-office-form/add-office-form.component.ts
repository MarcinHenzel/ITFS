import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-office-form',
  templateUrl: './add-office-form.component.html',
  styleUrls: ['./add-office-form.component.scss']
})
export class AddOfficeFormComponent implements OnInit {
  server: any = {answer: '', status: null};
  offices$;
  addOfficeForm: FormGroup = this.formBuilder.group({
    pcName: '',
    productName: '',
    productKey: '',
    registerMail: '',
    activationDate: ''
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) { }

  ngOnInit() {
    this.offices$ = this.initService.getOffices();
  }
  onSubmit() {
    this.addService.addOffice(this.addOfficeForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
}
