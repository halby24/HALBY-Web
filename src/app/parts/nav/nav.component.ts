import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('show', [
      state('show', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  social = [{
    link: 'https://twitter.com/halby24',
    icon: 'twitter',
    color: '#55acee'
  }, {
    link: 'https://github.com/halby24',
    icon: 'github',
    color: '#333'
  }, ];

  menuItems = [{
    title: 'Biography',
    link: '/biography',
  }, {
    title: 'Works',
    link: '/works',
  }, {
    title: 'Diary',
    link: '/blog',
  }, ];

  burger = false;

  constructor() { }

  ngOnInit() {
  }

}
