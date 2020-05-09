import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VehicleData } from 'src/app/models/VehicleData';

const ELEMENT_DATA: VehicleData[] = [
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'H', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'He', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'Li', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'Be', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'B', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'C', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'N', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'O', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'F', costs: 'costs'},
  {registrationNr: 'registrationNr', delegationNr: 'delegationNr', mileage: 'Ne', costs: 'costs'},
];
@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;
  displayedColumns: string[] = ['Registration Number', 'Delegation Number', 'Mileage', 'Costs'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchCar: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort = {lookFor: 'vehicle', by: 'REGISTRATION'};
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

