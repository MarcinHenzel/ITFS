import { SearchService } from './../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, Input } from '@angular/core';
import { debounceTime} from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  searchDeleg: FormGroup = this.formBuilder.group({
    search: ''
  })
  @Output() tableData = new EventEmitter();
  @Input() sortBy: string;
  constructor(private formBuilder: FormBuilder, private searchServ: SearchService) { }

  ngOnInit() {
    this.searchDeleg.controls.search.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      this.searchServ.getDelegation(val, this.sortBy).subscribe((data: any) => {
        this.tableData.emit(data);
      })
    });
  }

}
