import {Component, OnInit} from '@angular/core';
import {WordPressService} from '../../word-press/word-press.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-side-bar',
  templateUrl: './blog-side-bar.component.html',
  styleUrls: ['./blog-side-bar.component.scss']
})
export class BlogSideBarComponent implements OnInit {

  articles: Observable<any[]>;
  categories: Observable<any[]>;
  tags: Observable<any[]>;

  constructor(private wp: WordPressService,
              private router: Router) {
    this.articles = wp.get('halby24.com/wp', null, null, 'wpp');
    this.categories = wp.get('halby24.com/wp', null, 'categories');
    this.tags = wp.get('halby24.com/wp', null, 'tags');
  }

  ngOnInit() {
  }

  search(ev: KeyboardEvent) {
    if (ev.code === 'Enter') {
      (ev.target as HTMLInputElement).blur();
      const str = (ev.target as HTMLInputElement).value;
      this.router.navigate(['/blog'], { queryParams: { search: str } });
    }
  }

}
