import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute, Router} from "@angular/router";
import {RestService} from "../rest.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
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
export class ContentsComponent implements OnInit, OnDestroy {

  articles: Observable<any[]>;
  filterToggle = 'hidden';
  slideUpState = 'hidden';
  kind: string;
  hatena: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rest: RestService) {
    route.data.subscribe(data => {
      this.slideUpState = 'hidden';
      const kind = this.kind = data.kind;
      let obs: Observable<any[]>;
      switch (kind) {
        case 'blog':
          obs = rest.qiita();
          break;
        case 'works':
          obs = rest.tumblr();
          break;
      }
      this.articles = obs.do(() => this.slideUpState = 'visible');
    });
  }

  ngOnInit() {
    this.hatena = this.rest.hatena().subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.hatena.unsubscribe();
  }

  link(url, query) {
    console.log(arguments);
    if (/^http/.test(url)) {
      window.open(url);
    } else {
      this.router.navigate([url], {queryParams: query});
    }
  }

}
