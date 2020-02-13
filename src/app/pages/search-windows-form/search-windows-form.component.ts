import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

export interface WindowsData {
  pcName: string;
  systemName: string;
  activationDate: string;
  /* Production version:
    pcName: string;
  systemName: string;
  activationDate: Date; */
}
const ELEMENT_DATA: WindowsData[] = [
  {pcName: 'Hydrogen', systemName: 'systemName', activationDate: 'H'},
  {pcName: 'Helium', systemName: 'systemName', activationDate: 'He'},
  {pcName: 'Lithium', systemName: 'systemName', activationDate: 'Li'},
  {pcName: 'Beryllium', systemName: 'systemName', activationDate: 'Be'},
  {pcName: 'Boron', systemName: 'systemName', activationDate: 'B'},
  {pcName: 'Carbon', systemName: 'systemName', activationDate: 'C'},
  {pcName: 'Nitrogen', systemName: 'systemName', activationDate: 'N'},
  {pcName: 'Oxygen', systemName: 'systemName', activationDate: 'O'},
  {pcName: 'Fluorine', systemName: 'systemName', activationDate: 'F'},
  {pcName: 'Neon', systemName: 'systemName', activationDate: 'Ne'},
];
@Component({
  selector: 'app-search-windows-form',
  templateUrl: './search-windows-form.component.html',
  styleUrls: ['./search-windows-form.component.scss']
})
export class SearchWindowsFormComponent implements OnInit {
  displayedColumns: string[] = ['Pc Name', 'System Name', 'Activation Date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
