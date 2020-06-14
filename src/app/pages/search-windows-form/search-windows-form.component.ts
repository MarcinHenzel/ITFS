import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WindowsData } from 'src/app/models/WindowsData';


@Component({
  selector: 'app-search-windows-form',
  templateUrl: './search-windows-form.component.html',
  styleUrls: ['./search-windows-form.component.scss']
})
export class SearchWindowsFormComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['Pc Name', 'System Name', 'Activation Date'];
  searchWindows: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort = {lookFor: 'windows', by: 'NAME'};
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

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
