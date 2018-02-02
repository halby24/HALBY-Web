import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import * as $ from 'jquery';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  blog() {
    // return Observable.zip(this.qiita(), this.hatena())
    //   .map(res => [...res[0], ...res[1]]);
  }

  qiita(id?) {
    const assign = art => Object.assign(art, {
      kind: 'qiita',
      date: art.updated_at,
      content: art.rendered_body,
      url: '/blog',
      query: {
        service: 'qiita',
        id: art.id
      }
    });
    return id ? this.http.get(`${environment.fb_func_url}qiita`, {search: {endpoint: `items/${id}`}})
      .map(res => res.json())
        .map(assign)
      : this.http.get(`${environment.fb_func_url}qiita`, {search: {endpoint: 'users/icoico_w/items'}})
        .map(res => res.json())
        .map(arts => arts.map(assign));
  }

  hatena(id?) {
    return this.http.get(`${environment.fb_func_url}hateblo`)
      .map(res => $.parseXML(res.text()));
  }

  tumblr() {
    return this.http.get(`${environment.fb_func_url}tumblr`)
      .map(res => res.json())
      .map(arts => arts.map(art => this.parseEmbed(art)));
  }

  private parseEmbed(res) {
    res.title = res.slug;
    res.date = new Date(res.timestamp);
    res.html = res.caption;
    switch (res.type) {
      case 'video':
        res.embed = this.adjustIframe(res.player[2].embed_code);
        res.image = res.thumbnail_url;
        res.url = res.permalink_url;
        break;
      case 'audio':
        res.embed = this.adjustIframe(res.embed);
        res.url = res.audio_source_url;
        break;
    }
    return res;
  }

  private adjustIframe(html) {
    const dom = $(html);
    dom.css({width: '100%', height: '100%'});
    return dom[0].outerHTML;
  }

}
