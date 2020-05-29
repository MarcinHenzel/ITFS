import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-deleg-form',
  templateUrl: './add-deleg-form.component.html',
  styleUrls: ['./add-deleg-form.component.scss']
})
export class AddDelegFormComponent implements OnInit {
  server: any = {answer: '', status: null};
  sub: Subscription;
  regList$;
  addDelegForm: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
    delegationNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}\/[0-9]{1,2}\/.+')]),
    destination: new FormControl('', [Validators.required]),
    delegationPlace: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    costs: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    advancePayment: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    transport: new FormControl('', [Validators.required]),
    registration: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) {

  }
  ngOnInit() {
    this.regList$ = this.initService.getRegs();
    this.sub = this.addDelegForm.get('transport').valueChanges.subscribe(val => {
      console.log(val);
      val === 'business' ? this.addDelegForm.get('registration').enable() : this.addDelegForm.get('registration').disable();
    });
  }
  onSubmit() {
    this.server = this.addService.addOffice(this.addDelegForm.value, this.addDelegForm.invalid);
  }
}
