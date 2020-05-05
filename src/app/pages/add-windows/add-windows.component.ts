import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-windows',
  templateUrl: './add-windows.component.html',
  styleUrls: ['./add-windows.component.scss']
})
export class AddWindowsComponent implements OnInit {
  addWindowsForm: FormGroup = this.formBuilder.group({
    pcName: '',
    systemName: '',
    activationDate: ''
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // get system name
  }
  onSubmit() {
    console.log(this.addWindowsForm.value);
  }
}
