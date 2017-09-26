import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WordPressService} from '../../word-press/word-press.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {state, trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('slideUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(60px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', animate('.8s ease'))
    ])
  ]
})
export class ArticleComponent implements OnInit, OnChanges {

  article: Observable<any>;

  constructor(private route: ActivatedRoute,
              private wp: WordPressService) {
    route.params.subscribe(params => this.article = wp.get('halby24.com/wp', params.id));
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
