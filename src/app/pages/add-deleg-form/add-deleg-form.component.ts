import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deleg-form',
  templateUrl: './add-deleg-form.component.html',
  styleUrls: ['./add-deleg-form.component.scss']
})
export class AddDelegFormComponent implements OnInit {
  isBusinessTransport = false;
  constructor() { }

  ngOnInit() {
  }
  change(ev) {
    if(ev === 'business') {
      this.isBusinessTransport = true;
    } else {
      this.isBusinessTransport = false;
    }
  }
}
