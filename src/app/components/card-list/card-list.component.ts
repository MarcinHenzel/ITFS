import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faSearch, faCar, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  faCar = faCar;
  faTachometerAlt = faTachometerAlt;
  faSearch = faSearch;
  faPlus = faPlus;
  faBell = faBell;
  constructor() { }

  ngOnInit() {
  }

}
