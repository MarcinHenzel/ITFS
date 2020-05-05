import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
export interface WindowsData {
  registrationNr: string;
  delegationNr: string;
  mileage: string;
  costs: string;
  /* Production version:
  registrationNr: number;
  delegationNr: number;
  mileage: number;
  costs: string; */
}
const ELEMENT_DATA: WindowsData[] = [
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
  displayedColumns: string[] = ['Registration Number', 'Delegation Number', 'Mileage', 'Costs'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchCar: FormGroup = this.formBuilder.group({
    search: ''
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

