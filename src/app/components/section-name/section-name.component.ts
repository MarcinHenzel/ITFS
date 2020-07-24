import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-section-name',
  templateUrl: './section-name.component.html',
  styleUrls: ['./section-name.component.scss']
})
export class SectionNameComponent implements OnInit {
  @Input() outletData;
  constructor() { }

  ngOnInit() {

  }


}
