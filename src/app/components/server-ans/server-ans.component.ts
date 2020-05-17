import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChanges, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-ans',
  templateUrl: './server-ans.component.html',
  styleUrls: ['./server-ans.component.scss']
})
export class ServerAnsComponent implements OnInit, OnChanges {
  message: string;
  color: string;
  @Input() alarm = false;
  @Input() status: boolean;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    /* this.el.nativeElement.style.display = 'none'; */
  }
  ngOnChanges(change: SimpleChanges) {
    if (this.status === null) return;
    if (this.status) {
      if (this.alarm) {
        this.message = 'Message has been sent';
      } else {
        this.message = 'Record has been added succesfully';
      }
      this.color = 'green';
    } else {
      this.message = 'Server error';
      this.color = 'red';
    }
  }

}
