import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class WordPressService {

  constructor(private http: Http) { }

  private url(domain: string, id: number | string, slug: string, prefix: string, ssl: boolean) {
    return `http${ssl ? 's' : ''}://${domain.replace(/(.*)\/?$/, '$1')}/wp-json/${prefix ? prefix : 'wp/v2'}/${slug ? slug : 'posts'}/${id ? id : ''}`;
  }

  get(domain: string, id?: number | string, slug?: string, prefix?: string, options?: any): Observable<any> {
    const query = {search: Object.assign({}, options ? options : {}, {_embed: ''})};
    return this.http.get(this.url(domain, id, slug, prefix, true), query)
      .catch(() => this.http.get(this.url(domain, id, slug, prefix, false), query))
      .map(res => res.json()).share();
  }

  removeTag(str: string) {
    return str.replace(/(<("[^"]*"|'[^']*'|[^'">])*>|&[a-z]+;)/g, '');
  }

}
