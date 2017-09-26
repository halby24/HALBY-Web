import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('show', [
      state('show', style({opacity: 1, transform: 'translateY(0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateY(20%)'}),
        animate('.5s ease')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('body') body: string;
  @Input('date') date: string;

  @ViewChild('imageElement') imgEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
