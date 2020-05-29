import { OfficeData } from './../../models/OfficeData';
import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: OfficeData[] = [
  {date: 1, pcName: 'Hydrogen', key: 1.0079, version: 'H'},
  {date: 2, pcName: 'Helium', key: 4.0026, version: 'He'},
  {date: 3, pcName: 'Lithium', key: 6.941, version: 'Li'},
  {date: 4, pcName: 'Beryllium', key: 9.0122, version: 'Be'},
  {date: 5, pcName: 'Boron', key: 10.811, version: 'B'},
  {date: 6, pcName: 'Carbon', key: 12.0107, version: 'C'},
  {date: 7, pcName: 'Nitrogen', key: 14.0067, version: 'N'},
  {date: 8, pcName: 'Oxygen', key: 15.9994, version: 'O'},
  {date: 9, pcName: 'Fluorine', key: 18.9984, version: 'F'},
  {date: 10, pcName: 'Neon', key: 20.1797, version: 'Ne'},
];
@Component({
  selector: 'app-search-office-form',
  templateUrl: './search-office-form.component.html',
  styleUrls: ['./search-office-form.component.scss']
})
export class SearchOfficeFormComponent implements OnInit {
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;
  displayedColumns: string[] = ['date', 'pcName', 'key', 'version'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchOffice: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort: any = {lookFor: 'office', by: 'PC'};
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  setSort(event) {
    switch (event.index) {
      case 0: this.sort.by = 'PC'; break;
      case 1: this.sort.by = 'PRODUCT'; break;
      case 2: this.sort.by = 'MAIL'; break;
    }
    const search = this.searchBar.searchBar.controls.search;
    search.setValue(search.value);
  }
  updateTable(data: OfficeData[]) {
    this.dataSource = new MatTableDataSource(data);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
