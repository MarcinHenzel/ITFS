import { DelegationData } from '../../models/DelegationData';
import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { SearchService } from './../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';


var ELEMENT_DATA: DelegationData[] = [
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
  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;

  displayedColumns: string[] = ['Delegation Nr', 'Name', 'Date', 'Destination', 'Delegation place', 'Costs', 'Advance payment', 'Transport'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchDeleg: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort = {lookFor: 'delegation', by: 'NAME'};
  constructor(private formBuilder: FormBuilder, private searchServ: SearchService) { }
  ngOnInit() {

  }
  setSort(event) {
    switch (event.index) {
      case 0: this.sort.by = 'NAME'; break;
      case 1: this.sort.by = 'COSTS'; break;
      case 2: this.sort.by = 'TRANPOSRT'; break;
    }
    const search = this.searchBar.searchBar.controls.search;
    search.setValue(search.value);
  }
  updateTable(data: DelegationData[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
