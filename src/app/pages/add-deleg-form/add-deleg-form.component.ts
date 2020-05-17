import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-deleg-form',
  templateUrl: './add-deleg-form.component.html',
  styleUrls: ['./add-deleg-form.component.scss']
})
export class AddDelegFormComponent implements OnInit {
  server: any = {answer: '', status: null};

  regList$;
  isBusinessTransport = false;
  addDelegForm: FormGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    from: '',
    to: '',
    delegationNumber: '',
    destination: '',
    delegationPlace: '',
    companyName: '',
    costs: '',
    currency: '',
    advancePayment: '',
    transport: '',
    registration: '',
  })

  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) {

  }
  ngOnInit() {
    this.regList$ = this.initService.getRegs();
  }
  onSubmit() {
    this.addService.addDeleg(this.addDelegForm.value).subscribe(res => {
      this.server.status = true;
    }, err =>{
      this.server.answer = `${err}`;
      this.server.status = false;
    });
  }
  change(ev) {
    if (ev === 'business') {
      this.isBusinessTransport = true;
    } else {
      this.isBusinessTransport = false;
    }
  }
}
