import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface OfficeData {
  pcName: string;
  date: number;
  key: number;
  version: string;
  /* Production version:
  pcName: string;
  date: Date;
  key: string;
  version: string; */
}
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
  displayedColumns: string[] = ['date', 'pcName', 'key', 'version'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
