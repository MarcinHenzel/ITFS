import { DelegationData } from '../../models/DelegationData';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SearchService } from '../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-deleg-view',
  templateUrl: './search-deleg.component.html',
  styleUrls: ['./search-deleg.component.scss']
})
export class SearchDelegComponent implements OnInit {
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  displayedColumns: string[] = ['Delegation Nr', 'Name', 'Date', 'Destination', 'Delegation place', 'Costs', 'Advance payment', 'Transport'];
  dataSource : any;
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
