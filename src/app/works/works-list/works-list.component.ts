import { Component, OnInit } from '@angular/core';
import {WordPressService} from "../../word-press/word-press.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {

  bricks: Observable<any>;

  constructor(private wp: WordPressService) {
    this.bricks = wp.get('halby24.com/wp', null, 'works')
      .map(articles => articles.map(article => Object.assign(article, {body: wp.removeTag(article.content.rendered)})));
  }

  ngOnInit() {
  }

}
