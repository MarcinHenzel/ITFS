import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-ans',
  templateUrl: './server-ans.component.html',
  styleUrls: ['./server-ans.component.scss']
})
export class ServerAnsComponent implements OnInit, OnChanges {
  color: string;
  @Input() status: boolean;
  @Input() message: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    if (this.status === null) return;
    this.color = this.status ? 'green' : 'red';
  }
}
