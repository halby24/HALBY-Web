import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('bgLoaded', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateZ(-1200px) rotateX(-180deg)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateZ(0) rotateY(0)'
      })),
      transition('hidden => visible', animate('.7s ease'))
    ])
  ]
})
export class HeroComponent implements OnInit, OnChanges {

  @Input('color') color: string;
  @Input('size') size: string;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('background') background: string;
  @Input('centered') centered = false;
  @Input('shadow') shadow = false;

  bgLoaded = 'hidden';
  bgImage: string;

  constructor() { }

  ngOnInit() {
    this.bgLoaded = 'hidden';
  }

  ngOnChanges() {
    if (this.background) {
      const image = new Image();
      image.onload = ev => {
        this.bgImage = this.background;
        this.bgLoaded = 'visible';
      };
      image.src = this.background;
    }
  }

}
