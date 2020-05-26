import { AddService } from './../../services/add.service';
import { InitDataService } from './../../services/init-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-windows',
  templateUrl: './add-windows.component.html',
  styleUrls: ['./add-windows.component.scss']
})
export class AddWindowsComponent implements OnInit {
  windows$;
  server: any = {answer: '', status: null};
  addWindowsForm: FormGroup = this.formBuilder.group({
    pcName: new FormControl('', [Validators.required]),
    systemName:  new FormControl('', [Validators.required]),
    activationDate:  new FormControl('', [Validators.required])
  })
  constructor(private formBuilder: FormBuilder, private initService: InitDataService, private addService: AddService) { }

  ngOnInit() {
    this.windows$ = this.initService.getWindows();
  }
  onSubmit() {
    this.server = this.addService.addOffice(this.addWindowsForm.value, this.addWindowsForm.invalid);
  }
}
