import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VehicleData } from 'src/app/models/VehicleData';


@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  dataSource: any;
  searchCar: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort = { lookFor: 'vehicle', by: 'REGISTRATION' };
  displayedColumns: string[] = ['Registration Number', 'Delegation Number', 'Mileage', 'Costs'];

  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  setSort(event) {
    switch (event.index) {
      case 0: this.sort.by = 'REGISTRATION'; break;
      case 1: this.sort.by = 'DELEG'; break;
    }
    const search = this.searchBar.searchBar.controls.search;
    search.setValue(search.value);
  }
  updateTable(data: VehicleData[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
