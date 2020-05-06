import { SearchService } from './../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { debounceTime, tap } from 'rxjs/operators';

export interface WindowsData {
  delegationNr: string;
  name: string;
  date: string;
  destination: string;
  delegationPlace: string;
  costs: string;
  advancePay: string;
  transport: string;
  /* Production version:
  registrationNr: number;
  delegationNr: number;
  mileage: number;
  costs: string; */
}
var ELEMENT_DATA: WindowsData[] = [
  { delegationNr: 'delegationNr', name: 'eee', date: 'H', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'delssNr', date: 'He', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'ddd', date: 'Li', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'sss', date: 'Be', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'deleaNr', date: 'B', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'ffff', date: 'C', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'dddd', date: 'N', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'aaa', date: 'O', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'ddd', date: 'F', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' },
  { delegationNr: 'delegationNr', name: 'eee', date: 'Ne', destination: 'destination', delegationPlace: 'delegacj', costs: 'costs', advancePay: '123', transport: 'plane' }
];
@Component({
  selector: 'app-deleg-view',
  templateUrl: './deleg-view.component.html',
  styleUrls: ['./deleg-view.component.scss']
})
export class DelegViewComponent implements OnInit {
  displayedColumns: string[] = ['Delegation Nr', 'Name', 'Date', 'Destination', 'Delegation place', 'Costs', 'Advance payment', 'Transport'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchDeleg: FormGroup = this.formBuilder.group({
    search: ''
  })
  sortBy = 'name';
  constructor(private formBuilder: FormBuilder, private searchServ: SearchService) { }
  setSort(event) {
    switch (event.index) {
      case 0: this.sortBy = 'name'; break;
      case 1: this.sortBy = 'costs'; break;
      case 2: this.sortBy = 'transport'; break;
    }
    console.log(this.sortBy);
  }
  ngOnInit() {
    this.searchDeleg.controls.search.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      this.searchServ.getDelegation(val, this.sortBy).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data)
      })
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
