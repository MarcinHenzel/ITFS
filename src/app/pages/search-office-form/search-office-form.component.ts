import { OfficeData } from './../../models/OfficeData';
import { SearchBarComponent } from './../../components/search-bar/search-bar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-search-office-form',
  templateUrl: './search-office-form.component.html',
  styleUrls: ['./search-office-form.component.scss']
})
export class SearchOfficeFormComponent implements OnInit {
  displayedColumns: string[] = ['date', 'pcName', 'key', 'version'];
  dataSource: any;
  searchOffice: FormGroup = this.formBuilder.group({
    search: ''
  })
  sort: any = {lookFor: 'office', by: 'PC'};

  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

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
