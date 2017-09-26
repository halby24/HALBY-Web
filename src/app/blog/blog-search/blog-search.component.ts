import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.scss'],
})
export class BlogSearchComponent implements OnInit {

  private endpoint = 'https://www.googleapis.com/customsearch/v1';
  private api_key = '';
  private cx = '012923891136254016159:9cbq_ahd4w4';
  articles: Observable<any[]>;

  constructor(private route: ActivatedRoute,
              private http: Http) {
    this.articles = route.queryParams.map(params => params.q)
      .flatMap(q => http.get(this.endpoint, {
        search: {key: this.api_key, cx: this.cx, q: q}
      })).map(res => res.json());
  }

  ngOnInit() {
  }

}
