import { Component, OnInit } from '@angular/core';
import {style, trigger,state,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-aninated',
  templateUrl: './aninated.component.html',
  styleUrls: ['./aninated.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class AninatedComponent implements OnInit {
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
  constructor() { }

  ngOnInit() {
  }

}
