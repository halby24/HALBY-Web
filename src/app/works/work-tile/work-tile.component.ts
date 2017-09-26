import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-tile',
  templateUrl: './work-tile.component.html',
  styleUrls: ['./work-tile.component.scss']
})
export class WorkTileComponent implements OnInit {

  @Input('id') id: number;
  @Input('title') title: string;
  @Input('body') body: string;
  @Input('image') image: string;

  constructor() { }

  ngOnInit() {
  }

}
