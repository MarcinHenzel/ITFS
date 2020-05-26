import { Subscription } from 'rxjs';
import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-office-form',
  templateUrl: './add-office-form.component.html',
  styleUrls: ['./add-office-form.component.scss']
})
export class AddOfficeFormComponent implements OnInit {
  server: any = { answer: '', status: null };
  offices$;
  addOfficeForm: FormGroup = this.formBuilder.group({
    pcName: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    productKey: new FormControl('', [Validators.required]),
    registerMail: new FormControl('', [Validators.required, Validators.email]),
    activationDate: new FormControl('', [Validators.required]),
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) { }

  ngOnInit() {
    this.offices$ = this.initService.getOffices();
  }
 onSubmit() {
   this.server = this.addService.addOffice(this.addOfficeForm.value, this.addOfficeForm.invalid);
  }
}
