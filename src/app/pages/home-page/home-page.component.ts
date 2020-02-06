import { faTachometerAlt, faSearch, faCar, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faCar = faCar;
  faTachometerAlt = faTachometerAlt;
  faSearch = faSearch;
  faPlus = faPlus;
  faBell = faBell;
  constructor() { }

  ngOnInit() {
  }

}
