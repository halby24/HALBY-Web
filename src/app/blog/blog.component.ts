import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('click', [
      state('hidden', style({
        height: 0,
        padding: '0 0.75em',
        opacity: 0
      })),
      state('visible', style({
        height: '*',
        padding: '0.75em',
        opacity: 1
      })),
      transition('hidden <=> visible', animate('.5s ease'))
    ]),
    trigger('slideUp', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      transition('hidden => visible', animate('.5s ease'))
    ])
  ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
