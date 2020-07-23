import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

import { fadeAnimation } from './fadeInOutPages';
import { Component, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.scss'],
  animations: [trigger('fadeAnimation', [
    transition('* => Addvehicle,* => Alarm,* => Addmileage,* => Searchvehicle,* => Adddelegation,\
    * => Searchwindows,* => Addwindows,* => Searchoffice,* => Searchdelegation,* => Addoffice', [
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      group([
        query(
          ':leave',
          [style({ opacity: 1 }), animate(300, style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ]),


  ])]
})
export class MainManagerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  returnOutlet(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }
}
