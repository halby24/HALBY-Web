import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.scss']
})
export class BlogNavComponent implements OnInit {

  articles: Observable<any[]>;
  categories: Observable<any[]>;
  tags: Observable<any[]>;
  kind: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    route.data.subscribe(data => this.kind = data.kind);
  }

  ngOnInit() {
  }

  search(ev: KeyboardEvent) {
    if (ev.code === 'Enter') {
      (ev.target as HTMLInputElement).blur();
      const str = (ev.target as HTMLInputElement).value;
      this.router.navigate([`/${this.kind}`], { queryParams: { search: str } });
    }
  }

}
