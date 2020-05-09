import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WindowsData } from 'src/app/models/WindowsData';

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
  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;
  displayedColumns: string[] = ['Pc Name', 'System Name', 'Activation Date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchWindows: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort = {lookFor: 'windows', by: 'NAME'};
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  setSort(event) {
    switch (event.index) {
      case 0: this.sort.by = 'PC'; break;
      case 1: this.sort.by = 'SYSTEM'; break;
    }
    const search = this.searchBar.searchBar.controls.search;
    search.setValue(search.value);
  }
  updateTable(data: WindowsData[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
