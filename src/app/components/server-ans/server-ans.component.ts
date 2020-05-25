import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-ans',
  templateUrl: './server-ans.component.html',
  styleUrls: ['./server-ans.component.scss']
})
export class ServerAnsComponent implements OnInit, OnChanges {
  message: string;
  color: string;
  @Input() alarm = false;
  @Input() status: boolean | string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    if (this.status === null) return;
    if (this.status === true) {
      this.message = this.alarm ? 'Message has been sent' : 'Record has been added succesfully';
      this.color = 'green';
    } else if (typeof this.status === 'string') {
      this.message = this.status;
      this.color = 'red';
    } else {
      this.message = 'Server error';
      this.color = 'red';
    }
  }

}
