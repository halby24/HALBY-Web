import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('body') body: string;
  @Input('html') html: string;
  @Input('date') date: string;
  @Input('embed') embed: string;

  @ViewChild('imageElement') imgEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
