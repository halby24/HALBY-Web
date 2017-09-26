import {Component, OnInit} from '@angular/core';
import {WordPressService} from '../../word-press/word-press.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
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
    ])
  ]
})
export class ArticleListComponent implements OnInit {

  articles: Observable<any[]>;
  filterToggle = 'hidden';

  constructor(private wp: WordPressService,
              private route: ActivatedRoute) {
    this.articles = route.queryParams
      .flatMap(params => wp.get('halby24.com/wp',  null, null, null, params))
      .map(articles => articles.map(article => Object.assign(article, {body: wp.removeTag(article.content.rendered)})));
  }

  ngOnInit() {
  }

}
