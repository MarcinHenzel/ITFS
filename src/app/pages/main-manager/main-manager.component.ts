import { fadeAnimation } from './fadeInOutPages';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.scss'],
  animations: [fadeAnimation]
})
export class MainManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
